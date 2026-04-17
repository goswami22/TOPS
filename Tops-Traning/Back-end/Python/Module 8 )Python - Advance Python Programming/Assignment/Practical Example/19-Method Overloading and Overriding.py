19) Write a Python program to show method overloading. 

class Calculator:
    # Simulating method overloading using default arguments
    def add(self, a, b=0, c=0):
        return a + b + c

# Create object
calc = Calculator()

# Call add() with different numbers of arguments
print("Add 1 number:", calc.add(5))           # 5
print("Add 2 numbers:", calc.add(5, 10))     # 15
print("Add 3 numbers:", calc.add(5, 10, 15)) # 30
