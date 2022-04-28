import mysql.connector
import glob
import json
import csv
from io import StringIO
import itertools
import hashlib
import os
import cryptography
from cryptography.fernet import Fernet
from math import pow

class database:

    def __init__(self, purge = False):

        # Grab information from the configuration file
        self.database       = 'db'
        self.host           = '127.0.0.1'
        self.user           = 'master'
        self.port           = 3306
        self.password       = 'master'
        self.tables         = ['institutions', 'positions', 'experiences', 'skills','feedback', 'users']
        self.attempts       = 0
        
        # NEW IN HW 3-----------------------------------------------------------------
        self.encryption     =  {   'oneway': {'salt' : b'averysaltysailortookalongwalkoffashortbridge',
                                                 'n' : int(pow(2,5)),
                                                 'r' : 9,
                                                 'p' : 1
                                             },
                                'reversible': { 'key' : '7pK_fnSKIjZKuv_Gwc--sZEMKn2zc8VvD6zS96XcNHE='}
                                }
        #-----------------------------------------------------------------------------

    def query(self, query = "SELECT * FROM users", parameters = None):

        cnx = mysql.connector.connect(host     = self.host,
                                      user     = self.user,
                                      password = self.password,
                                      port     = self.port,
                                      database = self.database,
                                      charset  = 'latin1'
                                     )


        if parameters is not None:
            cur = cnx.cursor(dictionary=True)
            cur.execute(query, parameters)
        else:
            cur = cnx.cursor(dictionary=True)
            cur.execute(query)

        # Fetch one result
        row = cur.fetchall()
        cnx.commit()

        if "INSERT" in query:
            cur.execute("SELECT LAST_INSERT_ID()")
            row = cur.fetchall()
            cnx.commit()
        cur.close()
        cnx.close()
        return row

    def createTables(self, purge=False, data_path = 'flask_app/database/'):
        ''' FILL ME IN WITH CODE THAT CREATES YOUR DATABASE TABLES.'''

        #should be in order or creation - this matters if you are using forign keys.
         
        if purge:
            for table in self.tables[::-1]:
                self.query(f"""DROP TABLE IF EXISTS {table}""")
            
        # Execute all SQL queries in the /database/create_tables directory.
        for table in self.tables:
            
            #Create each table using the .sql file in /database/create_tables directory.
            with open(data_path + f"create_tables/{table}.sql") as read_file:
                create_statement = read_file.read()
            self.query(create_statement)

            # Import the initial data
            try:
                params = []
                with open(data_path + f"initial_data/{table}.csv") as read_file:
                    scsv = read_file.read()            
                for row in csv.reader(StringIO(scsv), delimiter=','):
                    params.append(row)
            
                # Insert the data
                cols = params[0]; params = params[1:] 
                self.insertRows(table = table,  columns = cols, parameters = params)
            except:
                print('no initial data')

    def insertRows(self, table='table', columns=['x','y'], parameters=[['v11','v12'],['v21','v22']]):
        
        # Check if there are multiple rows present in the parameters
        has_multiple_rows = any(isinstance(el, list) for el in parameters)
        keys, values      = ','.join(columns), ','.join(['%s' for x in columns])
        
        # Construct the query we will execute to insert the row(s)
        query = f"""INSERT IGNORE INTO {table} ({keys}) VALUES """
        if has_multiple_rows:
            for p in parameters:
                query += f"""({values}),"""
            query     = query[:-1] 
            parameters = list(itertools.chain(*parameters))
        else:
            query += f"""({values}) """                      
        
        insert_id = self.query(query,parameters)[0]['LAST_INSERT_ID()']         
        return insert_id

    def getResumeData(self):
        # Pulls data from the database to genereate data like this:
        reformated_dictionary = {}
        
        query = """SELECT institutions.inst_id, type, institutions.name AS inst_name, department, address, city, state, zip,
                   positions.position_id, title, responsibilities, positions.start_date AS p_start, positions.end_date AS p_end,
                   experiences.experience_id, experiences.name AS exp_name, description, hyperlink, experiences.start_date AS exp_start, experiences.end_date AS exp_end,
                   skills.skill_id, skills.name AS skill_name, skill_level

            
            FROM institutions 
            LEFT OUTER JOIN positions ON institutions.inst_id = positions.inst_id
            LEFT OUTER JOIN experiences ON positions.position_id = experiences.position_id
            LEFT OUTER JOIN skills ON experiences.experience_id = skills.experience_id
            ;"""
        
        results = self.query(query)

        for row in results:
            print(row)


        reformated_dictionary = {}

        for row in results:
            inner_dictionary = {}
            if row['inst_id'] in reformated_dictionary:
                # this inst already exists. this is a experience, skill or combo
                if row['position_id'] in reformated_dictionary[row['inst_id']]['positions']:
                    if row['experience_id'] in reformated_dictionary[row['inst_id']]['positions'][row['position_id']]['experiences']:
                        #this experience already exists, this is a new skill
                        if row['skill_name'] is not None:
                            skills_dict = reformated_dictionary[row['inst_id']]['positions'][row['position_id']]['experiences'][row['experience_id']]['skills']
                            inner_skill_dict = {}

                            inner_skill_dict['name'] = row['skill_name']
                            inner_skill_dict['skill_level'] = row['skill_level']

                            skills_dict[row['skill_id']] = inner_skill_dict
                            reformated_dictionary[row['inst_id']]['positions'][row['position_id']]['experiences'][row['experience_id']]['skills'] = skills_dict
                    else:
                        #this experience is new, and therefore so is the skill
                        if row['exp_name'] is not None:
                            experiences_dict = reformated_dictionary[row['inst_id']]['positions'][row['position_id']]['experiences']
                            inner_exp_dict = {}

                            inner_exp_dict['description'] = row['description']
                            inner_exp_dict['end_date'] = row['exp_end']
                            inner_exp_dict['hyperlink'] = row['hyperlink']
                            inner_exp_dict['name'] = row['exp_name']
                
                            if row['skill_name'] is not None:
                                skills_dict = {}
                                inner_skill_dict = {}

                                inner_skill_dict['name'] = row['skill_name']
                                inner_skill_dict['skill_level'] = row['skill_level']

                                skills_dict[row['skill_id']] = inner_skill_dict
                                inner_exp_dict['skills'] = skills_dict
                            else:
                                inner_exp_dict['skills'] = {}

                            inner_exp_dict['start_date'] = row['exp_start']
                
                            experiences_dict[row['experience_id']] = inner_exp_dict
                            reformated_dictionary[row['inst_id']]['positions'][row['position_id']]['experiences'] = experiences_dict
                
                        else:
                            inner_pos_dict['experiences'] = {}


            else:
                # this is the first occurence of this institution, meaning there is no new skill, experience, or position in this row
                inner_dictionary['address'] = row['address']
                inner_dictionary['city'] = row['city']
                inner_dictionary['state'] = row['state']
                inner_dictionary['type'] = row['type']
                inner_dictionary['zip'] = row['zip']
                inner_dictionary['department'] = row['department']
                inner_dictionary['name'] = row['inst_name']
                
                positions_dict = {}
                inner_pos_dict = {}

                inner_pos_dict['end_date'] = row['p_end']
                inner_pos_dict['responsibilities'] = row['responsibilities']
                inner_pos_dict['start_date'] = row['p_start']
                inner_pos_dict['title'] = row['title']

                if row['exp_name'] is not None:
                    experiences_dict = {}
                    inner_exp_dict = {}

                    inner_exp_dict['description'] = row['description']
                    inner_exp_dict['end_date'] = row['exp_end']
                    inner_exp_dict['hyperlink'] = row['hyperlink']
                    inner_exp_dict['name'] = row['exp_name']
                
                    if row['skill_name'] is not None:
                        skills_dict = {}
                        inner_skill_dict = {}

                        inner_skill_dict['name'] = row['skill_name']
                        inner_skill_dict['skill_level'] = row['skill_level']

                        skills_dict[row['skill_id']] = inner_skill_dict
                        inner_exp_dict['skills'] = skills_dict
                    else:
                        inner_exp_dict['skills'] = {}

                    inner_exp_dict['start_date'] = row['exp_start']
                
                    experiences_dict[row['experience_id']] = inner_exp_dict
                    inner_pos_dict['experiences'] = experiences_dict
                
                else:
                    inner_pos_dict['experiences'] = {}

                positions_dict[row['position_id']] = inner_pos_dict
                inner_dictionary['positions'] = positions_dict

                reformated_dictionary[row['inst_id']] = inner_dictionary
            
        print("THIS IS THE RESTRUCTURED ONE")
        print(reformated_dictionary)


        return reformated_dictionary

    def getFeedbackData(self):
        
        query = """SELECT * FROM feedback;"""

        results = self.query(query)
           

        print("The current feedback:")
        for row in results:
            print(row)
            

        reformated_dictionary = {}
        for row in results:
            inner_dictionary = {}
            inner_dictionary['name'] = row['name']
            inner_dictionary['email'] = row['email']
            inner_dictionary['comment'] = row['comment']
            reformated_dictionary[row['comment_id']] = inner_dictionary
        
        return reformated_dictionary
        return reformated_dictionary

#######################################################################################
# AUTHENTICATION RELATED
#######################################################################################
    def createUser(self, email='me@email.com', password='password', role='user'):
        query = """SELECT * FROM users;"""
        
        results = self.query(query)

        emails = set();

        for row in results:
            emails.add(row['email'])
        password = self.onewayEncrypt(password)

        if email not in emails:
            self.insertRows(table = 'users',  columns = ['role','email','password'], parameters = [[role,email,password]])
            return {'success': 1}
        else:
            return {'success': 0}

    def authenticate(self, email='me@email.com', password='password'):      
        query = """SELECT * FROM users;"""
        results = self.query(query)

        for row in results:
            if row['email'] == email:
                if row['password'] == self.onewayEncrypt(password):
                    self.attempts = 0
                    return {'success': 1}
        self.attempts = self.attempts + 1
        return {'success': 0}

    def onewayEncrypt(self, string):
        encrypted_string = hashlib.scrypt(string.encode('utf-8'),
                                          salt = self.encryption['oneway']['salt'],
                                          n    = self.encryption['oneway']['n'],
                                          r    = self.encryption['oneway']['r'],
                                          p    = self.encryption['oneway']['p']
                                          ).hex()
        return encrypted_string


    def reversibleEncrypt(self, type, message):
        fernet = Fernet(self.encryption['reversible']['key'])
        
        if type == 'encrypt':
            message = fernet.encrypt(message.encode())
        elif type == 'decrypt':
            message = fernet.decrypt(message).decode()

        return message


