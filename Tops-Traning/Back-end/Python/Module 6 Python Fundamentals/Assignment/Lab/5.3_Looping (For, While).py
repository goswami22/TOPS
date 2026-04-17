#   Practical Example 3: Write a Python program to find a specific string in the list using a simple for loop and if condition. 

list1 = ['apple', 'banana', 'mango', 'orange']
search = input('Enter string:  ')

for i in list1:
    if i == search:
        print(search, 'You are found right string' )
        break
else:
    print(search, 'You are not found right string' )

