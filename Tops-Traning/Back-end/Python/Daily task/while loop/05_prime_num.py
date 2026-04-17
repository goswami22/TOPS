'''
    prime number
'''


n = int (input("Enter Number: "))

if n > 1:
    for i in range(2 , n):
        if n % i == 0:
            print("Not a prime number")
            break
        else:
            print("Prime number")
            
    else:
        print("NOt prime")
        
