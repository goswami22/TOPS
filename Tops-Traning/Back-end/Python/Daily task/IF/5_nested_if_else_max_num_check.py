'''
    nested_if_else_max_num_check
'''

print("Check Max and Min num between three number")

a = int(input("Enter a: "))
b = int(input("Enter b: "))
c = int(input("Enter c: "))

if a > b:
    if a > c:
        print("a is Bigger")
    else:
        print("c is Bigger")
        
elif b > c:
    print("b is Bigger")
else:
    print("c is bigger")
