print("====== Alfabeats pattern 1 ========")

for i in range(65, 75):
    for j in range(65, i + 1):
        print(chr(i), end = " ")
    print()

print("====== Alfabeats pattern 2 ========")
for i in range(65, 75):
    for j in range(65, i + 1):
        print(chr(j), end = " " )
    print()
    
