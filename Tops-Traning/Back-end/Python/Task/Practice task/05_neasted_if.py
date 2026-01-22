'''
Write a program that takes:
Age
Nationality

Rules:
If age ≥ 18
If nationality is "Indian" → print "Eligible to vote"
Else → print "Not Indian citizen"
Else → print "Underage"
'''

age = int(input("Enter Your age: ") )


if age >= 18:
    nationality = input("Enter your nationality: ")
    if  nationality.lower() == "indian":
        print("You are eligible for vote")
    else :
        print("You are not eligible for vote")
else :
    print ("Underage")

