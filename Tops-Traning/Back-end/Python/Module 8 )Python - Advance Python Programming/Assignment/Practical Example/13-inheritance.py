# 13) Write a Python program to show single inheritance.

class A:
    print('Class A ')

class B(A):
    print('Class B')

print("B is child of A:", issubclass(B, A))
