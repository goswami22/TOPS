#   Write Python programs to demonstrate method overloading and method overriding.

class Calculator:
    # Simulating method overloading using default arguments
    def add(self, a, b=0, c=0):
        return a + b + c

calc = Calculator()

print(calc.add(5))        
print(calc.add(5, 10))    
print(calc.add(5, 10, 15))


# Parent class
class Parent:
    def greet(self):
        print("Hello from Parent")

# Child class
class Child(Parent):
    def greet(self):
        print("Hello from Child")  # Overrides Parent method

# Create objects
p = Parent()
c = Child()

p.greet()  
c.greet()  
