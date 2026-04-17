'''
    Create a class Student with:

    instance variables: name, marks

    an instance method to display student details
'''


class Student:

    def __init__(self, name,marks):
        self.name = name
        self.marks = marks

    def StudentInfo(self):
        print('Student name :', self.name)
        print('Student marks: ', self.marks)

s1 = Student('Bhavesh', 89)
s1.StudentInfo()

s2 = Student('ketan', 85)
s2.StudentInfo()

# Don't need to print() - output none
# __init__ method call automatically when object created
