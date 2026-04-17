import random

#l = random.randint(1000, 9999)                  #use in otp genarate

#print(l)


#a = random.choice([1,2,1.2, 'Bhavesh', True, False, 2000])          # pick in list 

#print(a)



l = []
lucky = []


for i in range (1, 101):
    l.append(i)

for i in range(1, 6):
    num = random.choice(l)
    lucky.append(num)
    l.remove(num)


print(l)
print(lucky)
    
    
