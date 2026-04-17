# Write a Python program to demonstrate handling multiple exceptions.

try:
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))

    result = a / b
    print("Result:", result)

except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")

except ValueError:
    print("Error: Invalid input. Please enter numbers.")

except Exception as e:
    print("Unexpected error:", e)
