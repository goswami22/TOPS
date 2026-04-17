#   12) Write a Python program to demonstrate the use of local and global variables in a class. 

CouchIng_Name = "Tops Technologies"   # Global variable

class Student:
    def show(self):
        name = "Bhavesh"            # Local variable
        print("Student Name:", name)
        print("CouchIng Name:", CouchIng_Name)

s1 = Student()
s1.show()
