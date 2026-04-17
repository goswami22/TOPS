#   Write a Python program that filters out even numbers using the filter() function. 

l = [1,2,3,4,5,6,7,8,9,10]

l1 = filter(lambda x: x %2 == 0, l)
print(list(l1))



