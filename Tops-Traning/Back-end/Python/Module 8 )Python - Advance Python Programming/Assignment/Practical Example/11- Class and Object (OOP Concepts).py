# 11) Write a Python program to create a class and access the properties of the class using an object

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Create object
p1 = Person("Bhavesh", 22)

# Access properties
print("Name:", p1.name)
print("Age:", p1.age)
