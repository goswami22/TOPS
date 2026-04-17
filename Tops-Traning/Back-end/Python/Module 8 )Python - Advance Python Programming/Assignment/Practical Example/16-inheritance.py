#   16) Write a Python program to show hierarchical inheritance
# Parent class
class A:
    def method_a(self):
        print("Method from class A")

# Child class B inherits from A
class B(A):
    def method_b(self):
        print("Method from class B")

# Child class C inherits from A
class C(A):
    def method_c(self):
        print("Method from class C")

# Create objects of B and C
obj_b = B()
obj_c = C()

# Access methods
obj_b.method_a()  # From A
obj_b.method_b()  # From B

obj_c.method_a()  # From A
obj_c.method_c()  # From C
