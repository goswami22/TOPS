'''
Function with no argument and no return value.
'''
def name():
    print('Bhavesh')

name()

print(" user input ".center(50, '='))

def name():
    name= input("Enter Your Name: ")
    print(name)

name()    

'''
Function with  argument but  no return value.
'''

def sum(a, b):
    print("A :", a, "B :", b)
    print("Total is :" ,a + b)

sum(100, 20)

def sum2(a, b):
    Total = a + b;
    print('A :', a, 'B: ', b,)
    print('Total', Total)

a = int(input("Enter A value: "))
b = int(input("Enter B value: "))
    
sum2(a, b)            
'''
Function with  argument but return value.
'''
def sub(a, b):
    print("A :", a, "B :", b)
    return a - b;
    
ans = sub(100, 20)
print(ans)


sub = lambda a, b: a - b
print(sub(10, 20))

sum2 = lambda a, b : a +b
print(sum2(40, 50))


cube = lambda x : x * x * x
print(cube(3))

def cube(x):
    return x * x * x

print(cube(5))



















