#   Write a Python program to merge two lists into one dictionary using a loop.

a = ['name', 'age', 'city']
b = ['Bhavesh', 30, 'Ahmedabad']

result = {}

for k, v in zip(a, b):
    result[k] = v

print(result)

#result = dict(zip(a,b ))
#print(result)
