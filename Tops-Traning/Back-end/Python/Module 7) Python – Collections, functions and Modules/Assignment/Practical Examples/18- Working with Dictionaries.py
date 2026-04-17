#   18) Write a Python program to count how many times each character appears in a string. 


s = 'Tops technology'
count = {}

for i in s:
    if i in count:
        count[i]+= 1
    else:
        count[i] = 1

print(count)
