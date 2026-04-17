num = int(input("Enter Numebr: "))

if num%2!=0:                                    # get odd numbers
    for i in range(3, int(num/2)+1,2):          # start form 3 and 
        if num%i == 0:                          # check number is devided by zero then not prime  i menas starting number
            print(num,"Not Prime Number")       
            break                               # if number not prime then stop 
    else:
        print(num, "Prime Number")
else:
    print(num, "Not Prime Number")
