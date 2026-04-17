#   Write a Python program to handle exceptions in a simple calculator (division by zero, invalid input).    

try:
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))

    result = a / b
    print("Result:", result)

except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")

except ValueError:
    print("Error: Please enter valid integers.")

except Exception as e:
    print("Unexpected error:", e)
