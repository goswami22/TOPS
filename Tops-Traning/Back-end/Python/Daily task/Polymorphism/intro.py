'''

Polymorphism – Key Points
Polymorphism means “one name, many forms”
Same method name but different behavior
Achieved using inheritance
Python supports runtime polymorphism

🔹 Method Overloading
Same method name
Different parameters
Python does NOT support true overloading
occur Compile-time 
Achieved using:
Default arguments
*args


🔹 Method Overriding
Same method name
Same parameters
Parent + Child class
Child class redefines parent method
Happens at runtime
Ex:
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")

🔹 super() – Key Points
super() calls next class in MRO
Does NOT always mean parent class
Used in method overriding
Important for multiple & hybrid inheritance
Prevents diamond problem


CALL DOWN (super)          RETURN UP (print)
──────────────────────────────────────────
D.show()                   Show from D
   ↓
C.show()                   Show From C
   ↓
B.show()                   Show From B
   ↓
A.show()                   Show From A


👉 Neeche jaate waqt koi print nahi
👉 Upar aate waqt print hota hai


'''
