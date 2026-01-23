'''
     Grade calculater
'''

s_roll = int(input("Enter Studnt Roll Number: "))
s_name = input("Enter Student Name: ")
s1 = int(input("Enter Subject 1 Marks: "))
s2 = int(input("Enter subject 2 Marks: "))
s3 = int(input("Enter Subject 3 Marks: "))

total = s1 + s2 + s3

per = total / 3;

print("Roll Number: ", s_roll)
print("Student Name: ", s_name)
print("Total Marks: " , total)
print("Percentage: ", per)

if per >= 70:
    print("Distinction")
elif per >= 60:
    print("First class")
elif per >= 50:
    print("Second class")
elif per >= 40:
    print("Pass class")
else:
    print("Fail")
