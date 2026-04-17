#   Practical Example 8: Write a Python program to check if a person is eligible to donate blood using a nested if. 

age = int(input('Enter Yor age: '))

if age >= 18:
    weight =int(input('Enter Your Weight: '))
    if weight  >= 50:
        print('A person is eligible to donate blood')
    else:
        print('A person is not eligible to donate blood')
else:
    print('A person is not eligible to donate blood')
