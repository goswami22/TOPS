#    17) Write a Python program to show hybrid inheritance. 
# Base class
class A:
    def method_a(self):
        print("Method from class A")

# Derived class B inherits from A (Multilevel)
class B(A):
    def method_b(self):
        print("Method from class B")

# Derived class C inherits from A (Hierarchical)
class C(A):
    def method_c(self):
        print("Method from class C")

# Derived class D inherits from B and C (Multiple)
class D(B, C):
    def method_d(self):
        print("Method from class D")

# Create object of class D
obj = D()

# Access methods from all parent classes
obj.method_a()  # From A
obj.method_b()  # From B
obj.method_c()  # From C
obj.method_d()  # From D
