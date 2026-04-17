'''
    Create a mini-project where students combine conditional statements, loops,
    and functions to create a basic Python application, such as a simple calculator
    or a grade management system. 
'''
def get_marks(subject_no):
    while True:
        marks = int(input(f"Enter subject {subject_no} marks: "))
        if marks >= 0 and marks <= 100:
            return marks
        else:
            print('Please enter valid marks')
            
def student_result():
    
    s_name = input('Enter Student Name: ')
    s_roll = int(input('Enter Student Roll Number: '))
    s1 = get_marks(1)
    s2 = get_marks(2)
    s3 = get_marks(3)
    s4 = get_marks(4)

    total = s1 + s2 + s3 + s4
    per = total / 4

    print('Student Roll Number: ', s_roll)
    print('Student  Name: ', s_name)
    print('Student  Total Marks: ', total)
    print('Student percentage: ', per)

    if per > 80:
        print('A Grade')
    elif per > 60:
        print('B Grade')
    elif per > 40:
        print('C Grade')
    else:
        print('Fail')

student_result()
