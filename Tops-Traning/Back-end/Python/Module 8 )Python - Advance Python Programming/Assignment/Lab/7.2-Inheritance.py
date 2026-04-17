# 14) Write a Python program to show multilevel inheritance.

class A:
    pass

class B(A):
    pass

class C(B):
    pass

print("C is child of A:", issubclass(C, A))
