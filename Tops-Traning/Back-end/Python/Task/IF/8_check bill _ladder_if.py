'''
    program to calculate electricity bill:
'''

unit = int(input("Enter Unit: "))

if unit <= 100:
    print("2Rs. Per Unit")
elif unit <= 200:
    print("3Rs. Per Unit")
elif unit <= 300:
    print("4Rs. Per Unit")
elif unit > 300:
    print("5Rs. Per Unit")

