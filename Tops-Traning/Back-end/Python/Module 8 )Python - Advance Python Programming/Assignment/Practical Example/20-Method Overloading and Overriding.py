#   20) Write a Python program to show method overriding.
# Parent class
class Parent:
    def greet(self):
        print("Hello from Parent class")

# Child class
class Child(Parent):
    def greet(self):
        print("Hello from Child class")  # Overrides Parent method

# Create objects
p = Parent()
c = Child()

# Call greet() method
p.greet()  # Calls Parent method
c.greet()  # Calls Child method (overridden)
