#   17) Write a Python program to convert two lists into one dictionary using a for loop.

a = ['name', 'age', 'city']
b = ['Bhavesh', 25, 'Ahmedabad']

res = {}

for k, v in zip(a, b):
    res[k]= v
print(res)
