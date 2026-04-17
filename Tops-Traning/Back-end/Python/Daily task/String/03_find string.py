s= input("Enter string: ")

al = 0
up = 0
lw = 0
sp = 0
num = 0

for i in s:
    if i.isalpha():
        al=al+1
    elif i.isspace():
        sp = sp+1
    elif i.isnumeric():
        num = num+1
    if i.isupper():
        up = up + 1
    elif i.islower():
        lw = lw+1

        
print("Total Alfabets: ", al)
print("Total Space: ", sp)
print("Total Number: ", num)
print("Total Uppercase: ", up)
print("Total Lowercase: ", lw)
