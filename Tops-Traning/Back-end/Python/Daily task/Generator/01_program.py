def fibonachi(n):
    a, b = 0 , 1
    for i in range(n):
        yield a
        a, b = b , a+b
        if num % 2 != 0:
            for i in range(3, int(num/2)+1,2):
                if num%i == 0:
                    print(num, "Not prime number")
                    break
                else:
                    print(num, "Prime number")
        else:
            print(num, "Not prime number")

fib= fibonachi(10)

for num in fib:
    print(num)0
