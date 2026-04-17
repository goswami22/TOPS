print("====== Number pattern 1 ========")

for i in range(1,10):
    for j in range(1, i + 1):
        print(j, end =" ")
    print()

print("====== Number pattern 2 ========")

for i in range(1, 10):
    for j in range(1, i + 1):
        print(i, end = " ")
    print() 


print("======== right to left  Number pattern ===============")
for i in range(1, 10):
    print( "" * (9 - i) , str(i) * i)

print("======== reverse right to left  Number pattern ===============")
for i in range(9, 0, -1):
    print( "" * (9 - i) , str(i) * i )

print("========  Number pattern ===============")    
        
for i in range (1, 10):
    for j in range (1, (i + 1)):
        print( j , end = " ")
    print()








