# [Web Application Development](https://gitlab.msu.edu/cse477-spring-2022/course-materials/): Homework 3



## Purpose

The purpose of this assignment is to provide hands-on experience with basic security, authentication and asyncryonous communication technologies for your web application, including:

1. Session management,
2. Password encryption and user authentication and,
3. Asynchronous communication technologies.

##### 

## Assignment Goals

Your high-level goal in this assignment is to extend your webpage from Homework 2 to include:

1. **An Authentication System**:  allowing user authentication, and restricted access to certain components of your application.
2. **A Chat System**: allowing you and a guest user of your web application to engage in a live text-based conversation. 
3. **An Editable Resume [Only Required for Honors Option]**:  allowing the site owner to add and edit parts of the resume from Homework 2, using the website.

Your implementation should satisfy both the General Requirements, and Specific Requirements detailed in the sections below;  to help you grasp the overarching goal and requirements more concretely, [see the Homework overview video](https://youtu.be/NZzUMxTJKr4). Please note; your implementation does not have to look identical to the example solution. As long as you achieve the Specific and General requirement below, your assignment is complete.



## Before you begin

Before you begin this assignment, please complete the following steps.



##### 1. Update your local copy of the Course Materials Repository

Navigate to the <u>course materials repository</u> on your local machine, and pull any updates by running the following command from the terminal:

```bash
git pull https://gitlab.msu.edu/cse477-spring-2022/course-materials.git
```



##### 2. Compose the Homework container locally 

1. Navigate to the `Homework-3` directory of your <u>Personal Course Repository</u> (that's the one with the same name as your netID). 

2. Use `docker-compose` to host the web application locally by executing the following command from you terminal:

   ```bash
   docker-compose -f docker-compose.yml -p hw3-container up
   ```

3. Visit [http://0.0.0.0:8080](http://0.0.0.0:8080) to ensure the template is running.

4. Note that the Homework 3 [Dockerfile](Dockerfile-dev) will install some additional libraries above and beyond what were used in Homework 2. 



##### 3. Explore Modifications to the Template Application

In this assignment, you will modify and extend the web application you developed in Homework 2.  As in Homework 2, we have provided a template app for this assignment in `Homework-3/flask-app/` that you can use to scaffold your assignment. Below we provide an overview of some new components in the template that have changed since Homework 2:

* **`database/create_tables`** :

  * `users.sql`: contains the `CREATE TABLE` statement for the  `users` table; this will store the `email`, `password` and `role` of each user.

    

* **`utils/database/database.py`**:  

  * `def createUser(...)`: Contains code to create database entried for your users.
  * `def authenticate(...)`: Contains code to check if a given username and password combination exist in the database.
  * `def onewayEncrypt(...)`: Contains code for irriversible encryption of passwords stored in the database.
  * `def reversibleEncrypt(...)`: Contains code for reversible encryption of content that will be stored in sessions.

  

*  **`app.py`**:

  *  Modified to import and enable SocketIO to support the asynchronous communication requirements of the chat system.

    

* **`__init__.py`**:

  * Modified to import and enable SocketIO to support the asynchronous communication requirements of the chat system.

  * Now creates two test users on app creation:

    ```python
    db.createUser(email='owner@email.com' ,password='password', role='owner')
    db.createUser(email='guest@email.com' ,password='password', role='guest')
    ```

    

* **`routes.py`**: 

  * `def login_required(func)`: contains the declaration of a function decorator that can be used to restrict access to routes within your application. More specifically, if you add `@login_required` on a seperate line the `@app.route(...)`, then users should be unable to access the route, unless they are logged in. Here is an example usage that would restrict access to the chat route, unless the user was logged in:

    ```python
    @app.route('/chat')
    @login_required
    def chat():
      ...
    ```

    

  * `def login()`: Contains a template of the login functionality; this should render an HTML template where the users inputs their credentials (email and password).

  * `def processlogin()`: Contains a template for the user authentication feature; this should process the username and password entered by users in the login page. If the authentication passes, it should add a variable to the session `email` containing the users' encrypted email . 

  * `def logout()`: Contains a template of the logout functionality for your website; more specifically, removal of the `email` from the session and redirection to the root directory of the website.

  * `def getUser()`: contains a function that decrypts the `email` stored in a user's session and returns its value or returns `'Unknown'` if there is no email value in the session. 

  * `def chat()` : contains a template for the chat page; this should render an HTML template that allows the users to engage in the chat with you. 

  * `@socketio.on('joined', namespace='/chat')` : uses [socket.io](https://flask-socketio.readthedocs.io/en/latest/getting_started.html) to place users within a chatroom, and sends a message indiciating that they have joined.

    

* **`templates/`** :

  * `chat.html`: contains an html template for the chat system.

  

##### 4. Migrate Homework 2 to Homework 3

Because Homework 3 extends Homework  2, it is important that your work extend your completed Homework 2 assignment. Following your review of the template, please copy over any relevant files from the previous homework into this assignment directory. 



## General Requirements

As a general requirement, we would like you to following good programming practice, this includes (but is not limited to):

* All code should be commented, organized, and thoughtfully structured.
* Don't mix `HTML`, `CSS`, and `Javascript` in single files.
* `Jinja` should be used to minimize redundancies in HTML.
* `SQL` tables should use forign keys when appropriate, and contain comments at both the row, and the table level.

Please see the General Requirements section of the [assignment rubric](documentation/rubric.md) for other elements of good programming practice that we'd like you you to pay attention to.



## Specific Requirements

For each of the three assignment goals listed above, we provide a section that outlines the specific requirements associated with that goal, below: 



#### 1. Authentication System Requirements 

For this portion of the assignment, you will generate the authentication system for your web application; this will involve two main tasks:  

1. **Extend the database utility to support sensitive data storage and authentication** by extending/completing the following code:

   * **`createUser(email, password, role)`**: Should create database entries for your users given an email, password and role (`guest`, or `owner`). The function should only add a user to the database if they do not already exists (i.e. if there is no matching email). The password of the user should be encrypted using [Scrypt](https://docs.python.org/3/library/hashlib.html) before being stored; you may use the `onewayEncrypt` function provided in the utility. The function should also return information about the success or failure of user creation.

   * **`authenticate(email, password)`**: Should check if a given email and encrypted password combination exist in the database. The function should  return information about the success or failure of the authentication.

2. **Enabling login and logout functionality for your application** by extending/completing the following code:

   * **`@app.route('/login')`**:  Should render the `login.html` template. The HTML template should contain two inputs that capture the email and password of the user, as well as a button that submits the credentials for authentication to `@app.route('/processlogin')`  using an asynchronous POST request via [AJAX](https://flask.palletsprojects.com/en/2.0.x/patterns/jquery/). If `@app.route('/processlogin')` indicates that the authentication was a failure this should be noted on the page; more specifically, your page must dynamically show how many times the authentication attempt has failed. If the authentication is a success, the user should be redirected to `/home`.

   * **`@app.route('/processlogin')`**:  Should be configured to process a POST request containing credentials for authentication. More sepcifically, the tool should extract the credentials from the request, and check if the user's email and password match a value in a the database using the `authenticate` method from the database utility. If the authentication is successful, the user's session should be updated to contain an encrypted version of their email; see below for an example:

   ```python
   session['email'] = db.reversibleEncrypt('encrypt', form_fields['email']) 
   ```

   The status of the authentication should be be returned as a JSON object to the AJAX handler in `login.html` for further action; see below for an example:

   ```
   return json.dumps(status)
   ```

   * **`@app.route('/logout')`**:  Should remove the `email` field from the session using [session.pop](https://pythonbasics.org/flask-sessions/) and redirect the user back to `/home`.

   * **`templates\shared\layout.html`**: The navigation bar should be updated to include a login/logout option. More specifically, when a user is logged in, they should see the option to logout; conversely, when a user is logged out, they should see the option to login.



#### 2. Chat System Requirements 

For this portion of the assignment, you will write code creates a live chat system in your web application. This will involve two tasks:  

1. **Complete the chat.html template** by adding HTML, CSS and JavaScript that allows users to see ongoing messages, enter their own messages, and leave the chat. The template already contains a functional implemention of `socket.io` for streaming messages in real time from the Client's interactions with `chat.html` to the `def joined(message)` in `routes.py`.  More specific requirements follow:

   * <u>Room Entry</u>: all users in the chat should see a message indicating when a given user "has entered the room"; this component was already completed for you. 
   * <u>Message Entry:</u> all users in the chat should see the messages entered by all other users.
   * <u>Room Derture:</u> all users in the chat should see the messages indicating when a user has "left the room". There should be a button on the page that allows the user to leave the chat.
   * <u>Message Styling:</u> all messages related to the site owner should be in blue and right justified; all other messages should be grey and left-justified.

2. **Add SocketIO processors in routes.py:** by writing any additonal  `@socketio.on(...)` decorated functions to `emit` data back to `chat.html`

   

#### 3. An Editable Resume

**PLEASE NOTE:** This section is only required if you want to complete the course as an Honors Option. Given the optional nature of this component, the instructions are not be as detailed:

1. Update your `/resume` page page so that when the owner of the site is logged in, they can add/edit all resume content; this should be something like the profile editors on social media platforms, but the specific implementation is up to you. You will receive credit for this insofar as the owner can: 
   * add new entries to your resume
   * edit existing entries
   * you were mindful of styling. 



## Submitting your assignment

##### Submit Homework 3 Code

1. Submit your assignment by navigating to the main directory of your <u>Personal Course Repository</u> and Pushing your repo to Gitlab; you can do this by running the following commands:

   ```bash
   git add .
   git commit -m 'submitting Homework 3'
   git push
   ```

2. You have now submitted Homework 3's code; you can run the same commands to re-submit anytime before the deadline. Please check that your submission was successfully uploaded by navigating to the corresponding directory in Personal Course Repository online.



**Deploy your web application to Google Cloud**

Deploy your Dockerized App to Google Cloud by running the commands below from the Homework-2 directory.

```bash
gcloud builds submit --tag gcr.io/cse477-spring-2022/homework
gcloud run deploy --image gcr.io/cse477-spring-2022/homework --platform managed
```

* When prompted for service name, press enter.
* When prompted for the `region` choose `us-central1`
* When prompted regarding `unauthenticated invocations` choose  `y`

when the application has completed deploying, it will provide provide an output like this:

```bash
Deploying container to Cloud Run service [homework] in project [cse477-spring-2022] region [us-central1]
✓ Deploying new service... Done.                                            
  ✓ Creating Revision...                                                    
  ✓ Routing traffic...                                                      
  ✓ Setting IAM Policy...                                                   
Done.                                                                       
Service [homework] revision [homework-00001-qol] has been deployed and is serving 100 percent of traffic.
Service URL: https://homework-z7tywrhkpa-uc.a.run.app
```

 The last line in the above output is the <u>Service URL</u>; You can visit the <u>Service URL</u> above to see a live version of your web application. 



##### Submit Homework 3 Survey:

[Submit the Service URL for your live web application in this Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfyRKFyKLa1di8f7HYdG5NFHYnaALb1lD3JrVVgnLmZU8pttQ/viewform). 



