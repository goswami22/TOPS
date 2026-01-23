num = int(input("Enter Numebr: "))

if num%2!=0:
    for i in range(3, int(num/2)+1,2):
        if num%i == 0:
            print(num,"Not Prime Number")
            break
    else:
        print(num, "Prime Number")
else:
    print(num, "Not Prime Number")
