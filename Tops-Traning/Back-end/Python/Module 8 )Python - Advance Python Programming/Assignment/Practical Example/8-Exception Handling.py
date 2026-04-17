#    8) Write a Python program to handle multiple exceptions (e.g., file not found, division by zero). 

try:
    file = open("data.txt", "r")
    a = int(input("Enter a number: "))
    b = int(input("Enter another number: "))
    
    print("Division Result:", a / b)
    print("File Content:", file.read())
    
    file.close()

except FileNotFoundError:
    print("Error: File not found.")

except ZeroDivisionError:
    print("Error: Cannot divide by zero.")

except ValueError:
    print("Error: Invalid number entered.")

except Exception as e:
    print("Unexpected error:", e)
