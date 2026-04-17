'''
    Check whether number is even or odd.
'''

print('Check Odd - Even Number here')
num = input('Enter Num: ')



if num.isdigit():
    num = int(num)
    if num % 2 == 0:
        print('Number is even');
    else:
        print('Number is odd');

else:
    print('Please Enter Valid Number')

