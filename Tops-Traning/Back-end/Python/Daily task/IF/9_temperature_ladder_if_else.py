'''
    check weather message based on temperature:
'''

tem = int(input("Enter Number To check tempereture: "))

if tem >= 40:
    print("Very Hot")
elif tem >= 30:
    print("Hot")
elif tem >= 20:
    print("Normal")
elif tem >= 10:
    print("cold")
else:
    print("Very Cold")
