#    15) Write a Python program to show multiple inheritance.

# Parent class A
class A:
    def method_a(self):
        print("Method from class A")

# Parent class B
class B:
    def method_b(self):
        print("Method from class B")

# Child class C inheriting from both A and B
class C(A, B):
    def method_c(self):
        print("Method from class C")

# Create object of class C
obj = C()

# Access methods from A, B, and C
obj.method_a()  # From A
obj.method_b()  # From B
obj.method_c()  # From C
