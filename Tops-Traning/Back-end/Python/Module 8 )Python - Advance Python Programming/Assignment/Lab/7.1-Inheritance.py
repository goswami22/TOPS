#   Write Python programs to demonstrate different types of inheritance (single, multiple, multilevel, etc.).

# 1) Single Inheritance
class A:
    pass

class B(A):
    pass

print("Single Inheritance:", issubclass(B, A))


# 2) Multiple Inheritance
class A1:
    pass

class B1:
    pass

class C1(A1, B1):
    pass

print("Multiple Inheritance:", issubclass(C1, A1), issubclass(C1, B1))


# 3) Multilevel Inheritance
class A2:
    pass

class B2(A2):
    pass

class C2(B2):
    pass

print("Multilevel Inheritance:", issubclass(C2, A2))


# 4) Hierarchical Inheritance
class A3:
    pass

class B3(A3):
    pass

class C3(A3):
    pass

print("Hierarchical Inheritance:", issubclass(B3, A3), issubclass(C3, A3))
