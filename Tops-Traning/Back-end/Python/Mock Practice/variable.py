# x =210
# print(x)

# x = 20
# print(x)

# a = b=c = 100

# print(c)
# print(a)

# print(type(a))

# name = 'bhavesh'
# print(name)
# print(type(name))

# name = input('Enter your name')
# print(name)

# we can not print before declaraition 
# print(a)
# a = 10

# first = 'bhavesh'
# last = 'Goswami'
# print(first + ' ' + last)

# print(first[0])
# age  = 16
# if age >= 18 :
#     print('eligble')
# else:
#     print('not eligible') 
    
# x = ['ram', 1, 1.5, True, 5000]

# print(x)
# x[0] = 2
# print(x)

# x.append(10)
# print(x)

# y = [45, 48]
# x.extend(y)
# print(x)

# x = (10, 25,10 , 'Rej')
# print(type(x))

# # x[0] = 10
# print(x) 

# student = {
#     "name":"Bhavesh",
#     "age":22,
#     "city":"Ahmedabad"
# }

# print(student)


# print(student["name"])
# print(student.name)

# name , age = input('Enter age: ').split()
# print(age)

# name = input('Enter name : ')
# age = int(input('Enter aage : '))

# print(f'my name is {name} age is {age}')
# fruit = ['apple','lemon', 'Grape']

# a= 'Bhavesh'

# for i in a:
#     print(i)
    
    
    
# s = {
#     'name': 'bhavesh',
#     'age' : 23
# }

# for value, key in s.values():
#     print(value)
    
# for i in range(10):
#     if i == 5:
#         break
#     print(i)
    
pices = [10, 20, 30, 50 , 40]

# total = 0

print(100 in pices)

print(pices.pop(0))
print(pices)
# for pice in pices:
#     total = total + pice    

# print(f'total is : {total}')

# def hello(name):
    
#     print(f'My name is {name}')

# hello('Bhavesh')

# def outer():
#     def inner():
#         print('inner fun')
#     inner()
# outer()

# def show(n):
#     if n == 0:
#         return
#     print(n)
    
#     show(n - 1)
# show(10)

# so = lambda x: x * x
# print(so(5))

# name = " Bhavesh  "
# print(name)  # remove space both side 
# print(name.strip())


# fr = 'apple banana mongo'
# print(fr.split())                   # covert srting to list 


# dr = ' i llove Java'

# print(dr.replace('Java', 'Python'))  # replace string
#  Set Datatype 
x = {102, 101, 104, 103}
# not store duplicate value - Store only unique value
# unoredered 
# mutable 
#use {}

# print(type(x))
# print(101 not in x)

# s = {
#     'name': 'Bhavesh',
#     'age': 26
# }

# print(type(s))
# print(s['name'])
# s['name'] = 'Raj'
# print(s)

# File handling 
# file = open('ttest.html', 'x')
# file = open('ttest.html', 'r')
# print(file.read())
# file.close()

# file = open('ttest.html', 'w')
# file.write('bhabesh')
# file.close()

# file = open("demo.txt", "w")

# file.write("Hello Bhavesh")

# file.close()

# file = open("demo.txt", "w")

# file.write("Hello")

# file.close()

# file = open('demo.txt', 'a')
# file.write('\nPython')
# file.close()

# # file = open('demo.txt', 'x')
# file= open('demo.txt', 'a')
# file.write('\nBHavesh')
# file.close()

# try:
#     age = int(input('Enter age : '))
#     print(f"My age is {age}")
# except Exception as e:
#     print('only number allow')