from tkinter import *
import mysql.connector
import tkinter.messagebox as msg

def create_conn():
    return mysql.connector.connect(
            host = "localhost",
            user = "root",
            password = "",
            database = "office2"
        )

print(create_conn())


def insert_data():
    if e_fname.get()=="" or e_lname.get()=="" or e_dept.get()=="" or e_salary.get()=="" or e_contact.get()=="":
        msg.showinfo('Insert Status','All Fields are Mandatory')
    else:
        conn = create_conn()
        cursor = conn.cursor()

        query = 'INSERT INTO employees(fname, lname, dname, salary, contact) VALUES(%s, %s, %s, %s, %s)'
        args = (e_fname.get(), e_lname.get(), e_dept.get(), e_salary.get(), e_contact.get())

        cursor.execute(query, args)
        conn.commit()
        conn.close()
        e_id.delete(0, 'end')
        e_fname.delete(0,'end')
        e_lname.delete(0,'end')
        e_dept.delete(0,'end')
        e_salary.delete(0,'end')
        e_contact.delete(0,'end')
        msg.showinfo('Insert Status', 'Data Inserted Successfully')
       

def search_data():
    
    e_fname.delete(0,'end')
    e_lname.delete(0,'end')
    e_dept.delete(0,'end')
    e_salary.delete(0,'end')
    e_contact.delete(0,'end')
    if e_id.get()=="":
        msg.showinfo('Search Status','All Fields are Mandatory')
    else:
        conn = create_conn()
        cursor = conn.cursor()

        query = 'select * from employees where id=%s'
        args = (e_id.get(),)

        cursor.execute(query, args)
        row = cursor.fetchall()
        if row:
            e_fname.insert(0, row[0][1])
            e_lname.insert(0, row[0][2])
            e_dept.insert(0, row[0][3])
            e_salary.insert(0, row[0][4])
            e_contact.insert(0, row[0][5])
        else:
            msg.showinfo('Search Status','Id not Found')
            
        conn.close()
       
        #msg.showinfo('Insert Status', 'Data Inserted Successfully')
    
def update_data():
    if e_id.get()=="" or  e_fname.get()=="" or e_lname.get()=="" or e_dept.get()=="" or e_salary.get()=="" or e_contact.get()=="":
        msg.showinfo('Update Status','All Fields are Mandatory')
    else:
        conn = create_conn()
        cursor = conn.cursor()

        query = 'Update employees set fname=%s, lname=%s, dname=%s, salary=%s, contact=%s where id=%s'
        args = (e_fname.get(), e_lname.get(), e_dept.get(), e_salary.get(), e_contact.get(), e_id.get())

        cursor.execute(query, args)
        conn.commit()
        conn.close()
        e_id.delete(0,'end')
        e_fname.delete(0,'end')
        e_lname.delete(0,'end')
        e_dept.delete(0,'end')
        e_salary.delete(0,'end')
        e_contact.delete(0,'end')
        msg.showinfo('Insert Status', 'Data Inserted Successfully')
       
    
def delete_data():
     if e_id.get()=="":
        msg.showinfo('Delete Status','Id is Mandatory')
     else:
        conn = create_conn()
        cursor = conn.cursor()

        query = 'DELETE FROM employees where id=%s'
        args = (e_id.get(),)

        cursor.execute(query, args)
        conn.commit()
        
        conn.close()
        e_id.delete(0,'end')
        e_fname.delete(0,'end')
        e_lname.delete(0,'end')
        e_dept.delete(0,'end')
        e_salary.delete(0,'end')
        e_contact.delete(0,'end')
        msg.showinfo('Delete Status', 'Data Deleted Successfully')
    




root = Tk()
root.geometry('520x500')
root.title('Employee Data')
root.resizable(width=False , height= False)

l_id = Label(root, text='E ID')
l_id.place(x = 50, y = 50)

l_fname = Label(root, text='First Name')
l_fname.place(x = 50, y = 100)

l_lname = Label(root, text='Last Name')
l_lname.place(x = 50, y = 150)

l_dept = Label(root, text='Department Name')
l_dept.place(x = 50, y = 200)

l_salary = Label(root, text='Salary')
l_salary.place(x = 50, y = 250)

l_contact = Label(root, text='Contact')
l_contact.place(x = 50, y = 300)


e_id = Entry(root)
e_id.place(x = 200, y = 50, width = 260, height=25)

e_fname = Entry(root)
e_fname.place(x = 200, y = 100, width = 260, height=25)

e_lname = Entry(root)
e_lname.place(x = 200, y = 150, width = 260, height=25)

e_dept = Entry(root)
e_dept.place(x = 200, y = 200, width = 260, height=25)

e_salary = Entry(root)
e_salary.place(x = 200, y = 250, width = 260, height=25)

e_contact = Entry(root)
e_contact.place(x = 200, y = 300, width = 260, height=25)



insert = Button(root, text= 'INSERT', bg= 'Black', fg='white', font = ('Arial', 10), command = insert_data)
insert.place(x = 50, y= 400)

search = Button(root, text='SEARCH', bg='Black', fg= 'white', font=('Arial', 10), command = search_data)
search.place(x = 120, y = 400)

update = Button(root, text= 'UPDATE', bg= 'Black', fg='white', font=('Arial', 10), command = update_data)
update.place(x = 200, y = 400)

delete = Button(root, text='DELETE', bg= 'Black', fg= 'white', font=('Arial', 10), command = delete_data)
delete.place(x = 280, y = 400)




