import random

print(random.randint(1000,9999))

l = []


for i in range (1, 101):
    l.append(i)
    
print(l)    


lucky = []

for i in range (10):
    num = random.choice(l)
    lucky.append(num)
    l.remove(num)

print(lucky)
    
