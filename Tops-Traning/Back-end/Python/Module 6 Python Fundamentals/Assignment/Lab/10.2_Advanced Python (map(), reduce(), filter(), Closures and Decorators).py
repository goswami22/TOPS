#   Write a Python program that uses reduce() to find the product of a list of numbers.

from functools import reduce

l = [1,2,3,4,5]

p = reduce(lambda x , y : x * y , l )

print(p)

