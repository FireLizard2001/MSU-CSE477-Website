# Author: Prof. MM Ghassemi <ghassem3@msu.edu>
from flask import current_app as app
from flask import render_template, redirect, request, session, url_for, copy_current_request_context
from flask_socketio import SocketIO, emit, join_room, leave_room, close_room, rooms, disconnect
from .utils.database.database  import database
from werkzeug.datastructures   import ImmutableMultiDict
from pprint import pprint
import json
import random
import functools
from . import socketio
db = database()


#######################################################################################
# AUTHENTICATION RELATED
#######################################################################################
def login_required(func):
    @functools.wraps(func)
    def secure_function(*args, **kwargs):
        if "email" not in session:
            return redirect(url_for("login", next=request.url))
        return func(*args, **kwargs)
    return secure_function

def getUser():
	return db.reversibleEncrypt('decrypt', session['email']) if 'email' in session else 'Unknown'

@app.route('/login')
def login():
	return render_template('login.html', user=getUser(), attempt=db.attempts)

@app.route('/logout')
def logout():
	session.pop('email', default=None)
	return redirect('/')

@app.route('/processlogin', methods = ["POST","GET"])
def processlogin():
	form_fields = dict((key, request.form.getlist(key)[0]) for key in list(request.form.keys()))
	if db.authenticate(form_fields['email'], form_fields['password']) == {'success' : 1}:
		session['email'] = db.reversibleEncrypt('encrypt', form_fields['email']) 
		return json.dumps({'success':1})
	else:
		print(db.attempts)
		return json.dumps(db.attempts)

#######################################################################################
# CHATROOM RELATED
#######################################################################################
@app.route('/chat')
@login_required
def chat():
    return render_template('chat.html', user=getUser())

@socketio.on('joined', namespace='/chat')
def joined(message):
    join_room('main')
    if getUser() == "owner@email.com":
	    emit('status', {'msg': getUser() + ' has entered the room.', 'style': 'width: 100%;color:blue;text-align: right'}, room='main')
    else:
	    emit('status', {'msg': getUser() + ' has entered the room.', 'style': 'width: 100%;color:gray;text-align: left'}, room='main')

@socketio.on('msgsend', namespace='/chat')
def msgsend(message):
    join_room('main')
    if getUser() == "owner@email.com":
	    emit('status', {'msg': message, 'style': 'width: 100%;color:blue;text-align: right'}, room='main')
    else:
	    emit('status', {'msg': message, 'style': 'width: 100%;color:gray;text-align: left'}, room='main')

@socketio.on('leave', namespace='/chat')
def joined(message):
    join_room('main')
    if getUser() == "owner@email.com":
	    emit('status', {'msg': getUser() + ' has left the room.', 'style': 'width: 100%;color:blue;text-align: right'}, room='main')
    else:
	    emit('status', {'msg': getUser() + ' has left the room.', 'style': 'width: 100%;color:gray;text-align: left'}, room='main')


#######################################################################################
# OTHER
#######################################################################################
@app.route('/')
def root():
	return redirect('/home')

@app.route('/home')
def home():
	print(db.query('SELECT * FROM users'))
	x = random.choice(['I am a member of the spartan marching band.','I am the president of the Game Design and Development Club.','I like to watch anime.'])
	return render_template('home.html', user=getUser(), fun_fact = x)

@app.route('/resume')
def resume():
	resume_data = db.getResumeData()
	pprint("This is the resume data:")
	pprint(resume_data)
	return render_template('resume.html', user=getUser(), resume_data = resume_data)

@app.route('/projects')
def projects():

	return render_template('projects.html', user=getUser())

@app.route('/piano')
def piano():

	return render_template('piano.html', user=getUser())

@app.route('/processfeedback', methods = ['post'])
def processfeedback():
	feedback = request.form
	#insert into database here

	#in order to handle errors, easiest solution is to remove all apostrophes
	comment = feedback.getlist('userComment')[0].replace("'", "")

	db.insertRows('feedback', ['name','email','comment'], [[feedback.getlist('userName')[0], feedback.getlist('userEmail')[0], comment]] )

	feedback_data = db.getFeedbackData()
	pprint("This is the feedback data:")
	pprint(feedback_data)
	return render_template('processfeedback.html', user=getUser(), feedback_data = feedback_data)

@app.route("/static/<path:path>")
def static_dir(path):
    return send_from_directory("static", path)

@app.after_request
def add_header(r):
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r
