#   14) Write a Python program to show multilevel inheritance.

# Base class
class A:
    def method_a(self):
        print("Method from class A")

# Derived class B inherits from A
class B(A):
    def method_b(self):
        print("Method from class B")

# Derived class C inherits from B
class C(B):
    def method_c(self):
        print("Method from class C")

# Create object of class C
obj = C()

# Access methods from A, B, and C
obj.method_a() 
obj.method_b()
obj.method_c()  
