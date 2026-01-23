s = input("Enter String : ")

al = 0
sp = 0
num = 0
up = 0
lw = 0


for i in s:
    if i.isspace():
        sp += 1
    elif i.isnumeric():
        num += 1
    elif i.isalpha():
        al += 1
    if i.isupper():
            up += 1
    elif i.islower():
            lw += 1

print("Total Alphabets :", al)
print("Total Spaces    :", sp)
print("Total Uppercase :", up)
print("Total Lowercase :", lw)
print("Total Numbers   :", num)
