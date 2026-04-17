#   18) Write a Python program to demonstrate the use of super() in inheritance.
# Parent class
class A:
    def greet(self):
        print("Hello from class A")

# Child class inheriting from A
class B(A):
    def greet(self):
        # Call the greet() method of parent class A
        super().greet()
        print("Hello from class B")

# Create object of child class
obj = B()

# Call greet() method
obj.greet()
