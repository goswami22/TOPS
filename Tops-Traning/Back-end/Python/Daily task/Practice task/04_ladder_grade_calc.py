'''
Write a program that takes marks from the user and prints grade:
    Marks ≥ 90 → "Grade A"
    Marks ≥ 75 → "Grade B"
    Marks ≥ 60 → "Grade C"
    Marks ≥ 40 → "Grade D"
    Else → "Fail"
'''
marks = int (input ("Enter Marks: "))

if marks >=  90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
elif marks >= 40:
    print("Grade D")
else:
    print("Fail")
