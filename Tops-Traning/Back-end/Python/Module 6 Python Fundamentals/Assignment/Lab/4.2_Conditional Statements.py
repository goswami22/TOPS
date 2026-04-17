#   Practical Example 6: Write a Python program to check if a number is prime using if_else.
num = int(input('Enter Number: '))

if num % 2 != 0:
    for i in range(3, int(num /2) + 1, 2):
        if num % i == 0:
            print(num,'Number is not Prime')
            break
    else:
        print(num,'Number is Prime')
else:
    print(num,'Number is not Prime')
            
