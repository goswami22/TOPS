'''
    Take 3 numbers from user and print largest number.
'''
num1 = int(input('Enter Number 1: '))

num2 = int(input('Enter Number 2: '))

num3 = int(input('Enter Number 3: '))


'''
if num1 > num2:
    if num1 > num3:
        print('number 1 is Largest')
    else:
        print('Number 3 is Largest')
elif num2 > num3:
    print('Number 2 is Largest')
else:
    print('Number 3 is Largest')
'''
if num1 >= num2 and num1 >= num3:
    print('Largest number is', num1)
elif num2 >= num1 and num2 >= num3:
    print('Largest Numebr is', num2)
else:
    print('Largest Number is', num3)


# or

largest = max(num1, num2, num3)
print('Largest Number is', largest);

smallest = min(num1 , num2, num3)
print('smallest number is', smallest )
