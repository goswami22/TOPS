#   Practical Example 7: Write a Python program to calculate grades based on percentage using if-else ladder.

marks = int(input('Enter Your Marks :'))

if marks > 100 or marks < 0:
    print('Plaese Enter Valid number')
elif marks <= 100 and marks > 80:
    print('A Grade')
elif marks <= 80 and marks > 60:
    print('B Grade')
elif marks <= 60 and marks >= 40:
    print('C Grade')
else:
    print('Fail')
