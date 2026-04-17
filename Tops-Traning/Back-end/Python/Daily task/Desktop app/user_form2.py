from tkinter import *


root = Tk()
root.geometry('600x600')
root.title('User Form')
root.resizable(width=False, height = False)

h1 = Label(root, text='User Form', font=('arial', 14, 'bold'))
h1.pack(pady=20)


l_id = Label(root, text='User Id', font=('arial', 12))
l_id.place(x = 50, y = 80)

l_fname = Label(root, text='First Name', font=('arial', 12))
l_fname.place(x = 50, y = 130)

l_lname = Label(root, text='Last Name', font=('arial', 12))
l_lname.place(x = 50, y = 180)

l_email = Label(root, text='Email', font=('arial', 12))
l_email.place(x = 50, y = 230)

l_contact = Label(root, text='Contact', font=('arial', 12))
l_contact.place(x = 50, y = 280)

l_gender = Label(root, text='Gender', font=('arial', 12))
l_gender.place(x = 50, y = 330)

l_dept = Label(root, text='Department', font=('arial', 12))
l_dept.place(x = 50, y = 380)



e_id = Entry(root)
e_id.place(x = 180, y = 80, width= 300, height = 25)

e_fname = Entry(root)
e_fname.place(x = 180, y = 130, width= 300, height = 25)

e_lname = Entry(root)
e_lname.place(x = 180, y = 180, width= 300, height = 25)

e_email = Entry(root)
e_email.place(x = 180, y = 230, width= 300, height = 25)

e_contact = Entry(root)
e_contact.place(x = 180, y = 280, width= 300, height = 25)

e_gender = Entry(root)
e_gender.place(x = 180, y = 330, width= 300, height = 25)

e_dept = Entry(root)
e_dept.place(x = 180, y = 380, width= 300, height = 25)














