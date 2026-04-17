class Car:
    wheel = 4               # class attribute (shared by all instances) - Comman class

    def __init__(self, brand, modal):
        self.brand = brand
        self.modal = modal


car1 = Car('Toyota', 'Camry')
car2 = Car('Honda', 'Civic')

print(car1.wheel)
print(car2.wheel)

print(car1.brand)
print(car1.modal)
print(car2.brand)
print(car2.modal)
    
