from tkinter import *
import mysql.connector
import tkinter.messagebox as msg

def create_conn():
    return mysql.connector.connect (
            host = 'localhost',
            user = 'root',
            password = "",
            database = "login_form"
        )

def login_data():
    if e_name.get() =="" or e_email.get() == "":
        msg.showinfo('login Status', 'All fields are Mandatory')
    else:
        conn = create_conn()
        cursor = conn.cursor()

        query = "insert into user_data(u_name, u_email) values(%s, %s)"
        args = (e_name.get(), e_email.get())

        cursor.execute(query, args)
        conn.commit()
        conn.close()
        e_name.delete(0, 'end')
        e_email.delete(0, 'end')
        msg.showinfo('Login status', 'Data Login successfully')
    
   
root = Tk()
root.title('Login form')
root.resizable(width=False, height = False)
root.geometry('500x350')

h1 = Label(root, text="Login Form" , font=('arial', 20, 'bold'))
h1.place(x=150, y = 50)

l_name = Label(root, text="Name", font=('arial', 12))
l_name.place(x=50, y=120)

l_email = Label(root, text='Email', font=('arial', 12))
l_email.place(x=50, y=170 )



e_name= Entry(root)
e_name.place(x= 150, y= 120, width=280, height= 25)

e_email= Entry(root)
e_email.place(x = 150, y = 170, width= 280, height = 25)



login = Button(root, text='Login', bg='Black', fg='White', font=('arial', 11, 'bold'), command = login_data)
login.place(x=50, y = 220)
