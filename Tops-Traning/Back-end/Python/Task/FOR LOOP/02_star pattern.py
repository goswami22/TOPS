'''
    star pattern
'''
print("====== Left to Right ========")

for i in range(1, 10):
    print("*" * i)

print("====== Right to Left ========")

for i in range(1, 10):
     print(" " * (9 - i),"*" * i )


print("====== Triangle ========")
for i in range(1,10):
    print(" " * (9 - i) ,"* " * i)


