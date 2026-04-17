from tkinter import *

import mysql.connector


def create_conn():
    return mysql.connector.connect(
            host = "localhost",
            user = "root",
            password = "",
            database = "my_first_example"
        )

print(create_conn())

def insert_data():
    print('Insert Data')
    
def search_data():
    print('Search Data')

def update_data():
    print('Update Data')

def delete_data():
    print('Delete Data')



root = Tk()
root.geometry('400x450')
root.title('My First Example')
root.resizable(width=False, height = False)

l_id = Label(root,text = 'ID')
l_id.place(x = 50, y = 100)

l_fname = Label(root, text= 'FIRST NAME')
l_fname.place(x = 50, y = 150)

l_lname = Label(root, text= 'LAST NAME')
l_lname.place(x = 50, y = 200)

l_email = Label(root, text= 'EMAIL')
l_email.place(x = 50, y = 250)

l_contact = Label(root, text= 'CONTACT')
l_contact.place(x = 50, y = 300)

e_id = Entry(root)
e_id.place(x = 160, y = 100 )

e_fname = Entry(root)
e_fname.place(x = 160, y = 150)

e_lname = Entry(root)
e_lname.place(x = 160, y = 200)

e_email = Entry(root)
e_email.place(x = 160, y = 250)

e_contact = Entry(root)
e_contact.place(x = 160, y = 300)


insert= Button(root, text= 'INSERT', bg = 'Blue', fg = 'White', font= ('calibri', 12), command=insert_data)
insert.place(x = 50, y = 350)

search = Button(root, text='SEARCH', bg = 'Blue', fg = 'White', font =('calibri', 12), command= search_data)
search.place(x = 115, y = 350)

update = Button(root, text='UPDATE', bg= 'Blue', fg = 'White', font = ('calibri', 12), command = update_data)
update.place(x = 186, y = 350)

delete = Button(root, text= 'DELETE', bg = 'Blue', fg = 'White', font = ('calibri', 12), command = delete_data)
delete.place(x = 257, y = 350)

















               
