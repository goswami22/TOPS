#   10) Write a Python program to print custom exceptions. 


class CustomError(Exception):
    pass

try:
    age = int(input("Enter your age: "))
    
    if age < 18:
        raise CustomError("Age must be 18 or above.")

    print("Access granted.")

except CustomError as e:
    print("Custom Exception:", e)

except ValueError:
    print("Invalid input. Please enter a number.")
