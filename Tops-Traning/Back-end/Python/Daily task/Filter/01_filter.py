l = [2,5,6,7,8,10,12,48]

l1 = list(filter(lambda a: a > 5, l))
print(l1)


def evencheck(n):
    return n % 2 == 0

l2 = list(filter(evencheck, l))
print(l2)


l3 = list(filter(lambda n : n % 2 != 0, l))
print(l3)
