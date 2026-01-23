'''
    create a simple calculator using if-else ladder
'''

print("1. Addition")
print("1. Subtract")
print("1. Multiply")
print("1. divide")


a = int(input("Enter Number: "))
b = int(input("Entre Number: "))

choice = int(input("Etner number between 1 to 4: "))

if choice == 1:
    print("Addition : ", a + b)
elif choice == 2:
    print("Subtract : ", a - b)
elif choice == 3:
    print("Multiply: ", a * b)
elif choice == 4:
    if b != 0:
        print("divide: ", a / b)
    else:
        print("Can not devide by zero")
else:
    print("Invalid number")
