from functools import reduce

prices = [120, 80, 150, 60]

total = reduce(lambda x, y: x + y, prices)

print("Total bill:", total)