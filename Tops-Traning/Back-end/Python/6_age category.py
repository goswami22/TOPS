'''
    chack age category
'''

print("chack age category")

age = int(input("Enter Your age: "))


print("Your age category")
if age >= 60:
    print("Senior citizen")
elif age >= 20 and age < 60:
    print("Adult")
elif age >= 13 and age < 19:
    print("Teenager")
else:
    print("Child")
