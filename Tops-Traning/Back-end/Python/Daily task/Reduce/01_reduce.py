#   Write a Python program that uses reduce() to find the product of a list of numbers.

from functools import reduce

l = [1,2,3,4,5]

p = reduce(lambda x , y : x * y , l )

print(p)



l2= [20,240,40,80,12,15,75,]

maxnum = reduce(lambda x, y : x if x > y else y, l2)
minnum = reduce(lambda x, y: x if x < y else y , l2 )
print(maxnum)
print(minnum)
