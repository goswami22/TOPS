data = [10, "Tops", 5.5,10,10, True]

data.append('False')
print(data)

d2= ["apple", "banana", "mango"]
data.extend(d2)
print(data)


data.copy()
print(data)

data.pop()
print(data)

data.remove(10)
print(data)

#data.clear()
#print(data)

data[0] = 100
print(data)

c = data.count(10)
print(c)

data.reverse()
print(data)

for i in data:
    print(i)

for i in range(len(data)):
    print(i, data[i])







    

    
