'''
    print star 
'''
print("========= left to right ===============")
for i in range(1, 10):
    print("*" * i)

print("========= right to left ===============")

for i in range(1 , 10):
    print(" " * (9 - i), "*" * i)


print("========= Triangle ===============")

for i in range(1 , 10):
    print(" " * (9 - i), "* " * i)

print("========= number pattern ===============")

for i in range(1, 10):
    for j in range(1, (i + 1)):
        print(i, end = " ")
    print()


print("========= number 2 pattern ===============")

for  i in range(1, 10):
    for j in range(1, (i + 1)):
        print( j  , end = " ")
    print()


print("========= Alphabets pattern ===============")

for i in range(65, 75):
    for j in range(65, (i + 1)):
        print(chr(j) , end = " ")
    print()

print("========= Reverse Alphabets  pattern ===============")

for i in range(74, 64, -1):
    for j in range(65, i + 1):
        print(chr(j), end=" ")
    print()


print("========= Reverse Alphabets  pattern ===============")

for i in range(74,64, -1 ):
    for j in range(75, i - 1, -1):
        print(chr(i), end = " " )
    print()

print("========= simple for loop ===============")

for i in range(1, 11):
    for j in range(1, i + 1):
        print( i , end = "  " )
    print()


print("========= reverse simple for loop ===============")

for i in range(9, 0, -1):
    for j in range(1, (i + 1)):
        print( i,  end = " ")
    print()


print("========= reverse simple for loop ===============")

for i in range(9, 0, -1):
    for j in range(1, (i + 1)):
        print( " " , ( 9 - i) ,i,  end = " ")
    print()










