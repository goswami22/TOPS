'''
    sum of number
    5 + 0 = 5
    5 + 4 = 9
    9 + 3 = 12
    12 + 2 = 14
    14 + 1 = 15
'''




n = int (input("Enter N: "))
sum = 0

while n > 0:
    sum = sum + n
    n = n - 1
    print("Sum : ", sum)
