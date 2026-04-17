class student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def describe(self):
        return f"{self.name} is {self.age} years old"

    def update_age(self, new_age):
        self.age=  new_age
    




    
s1 = student('Raj', 32)
print(s1.describe())


s2 = student('Ajay', 35)
print(s2.describe())


s1.update_age(36)
print(s1.describe())
