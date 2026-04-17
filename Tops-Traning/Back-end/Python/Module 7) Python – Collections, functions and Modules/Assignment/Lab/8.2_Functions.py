#   Write a Python program to create a calculator using functions. 

def add(a, b):
    return a+ b

def sub(a, b):
    return a - b

def multi(a, b):
    return a * b


def div(a, b):
    if b == 0:
        return('Error, Devided by zero')
    return a / b


print('Calculater')
print('1. Addition')
print('2. Substraction')
print('3. Multiplication')
print('4. Diviion')

choose = int(input('Choose Number: '))

num1 = float(input('Enter number 1: '))
num2 = float(input('Enter number 2: '))

if choose == 1:
    print(add(num1, num2))
elif choose == 2:
    print(sub(num1, num2))
elif choose == 3:
    print(multi(num1, num2))
elif choose == 4:
    print(div(num1, num2))
else:
    print('Enter Valid Number')








    
