
def oddeven(a):
    if a%2 == 0:
        print(a, 'Is even')
    else:
        print(a, 'Is odd')

def maxof2(a, b):
    if a >b:
        print(a , 'is max number')
      else
        print(a , 'is max number')


def maxof3(a,b,c):
    if a > b:
        if a > c:
            print(a , 'Is Max Number')
        else:
            print(c , 'is max number')
    elif b > c:
            print(b , 'is max number')
        else:
            print(c , 'is max number')


def fibonaci (n)
    a , b = 0,1
    print(a , end ='')

    while b < n:
        print(b, end = '')
        a , b = b , a + b
def primeNum(n):

    if n % 2 != 0:
        for i in range(3, int(n/2)+1, 2):
            if n % i == 0:
                print("Number is not prime")
                break
        else:
            print("Number is prime")

    else:
        print("Number is not prime")
        
        

        








    
