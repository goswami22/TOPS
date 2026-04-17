import UDF

while True:
    print("*" * 100)
    print("1. oddeven")
    print("2. Max of 2")
    print("3. Max of 3")
    print("4. Fibonacci Number")
    print("5. Prime Number")
    print("*" * 100)

    choise = int(input("Enter Your choise : "))
    print("*" * 100)

    if choise == 1:
        n1 = int(input("Enter your number: "))
        UDF.oddeven(n1)
