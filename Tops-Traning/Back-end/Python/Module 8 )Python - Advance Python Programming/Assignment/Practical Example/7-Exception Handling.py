# 7) Write a Python program to handle exceptions in a calculator.

try:
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    operator = input("Enter operator (+, -, *, /): ")

    if operator == "+":
        print("Result:", a + b)
    elif operator == "-":
        print("Result:", a - b)
    elif operator == "*":
        print("Result:", a * b)
    elif operator == "/":
        print("Result:", a / b)
    else:
        print("Invalid operator")

except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")

except ValueError:
    print("Error: Please enter valid numbers.")

except Exception as e:
    print("Unexpected error:", e)
