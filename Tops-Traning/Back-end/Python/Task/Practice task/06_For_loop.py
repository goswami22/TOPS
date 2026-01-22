'''
    Task:
    Write a Python program using a for loop to print the multiplication table of a given number (from 1 to 10).
'''


print("Enter Table Number")
num = int(input ("Enter Number: "))


for i in range (1, 11):
    print( num ,  "x" ,  i  ,'=',  num * i)
