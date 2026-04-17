'''
    Print multiplication table of number entered by user.    
'''

print('Enter table Number you want')
num = int(input('Enter Number '))

for i in range(1,11):
    print(num,'x',i,"=",num * i)   
    
