l = [1,2,3,4,5]

result = list(map(lambda x: x * 2, l))

print(result)



# convert Datatype
data =['10', '20', '30', '40']

print(list(map(int, data)))

#   Map with Multiple Iterables
a = [4,5,6]
b = [8,9,10]

mp = list(map(lambda x, y: x + y, a,b))
print(mp)




