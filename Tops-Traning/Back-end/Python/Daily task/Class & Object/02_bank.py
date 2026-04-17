class Bank:
    def openAccount(self, accno, username, balance):
        self.accno = accno
        self.username = username
        self.balance = balance
        print("Hello", username, "Your Accout number is ", accno, 'Is open with', balance,'Rs', )

    def deposit(self, amount):
        self.balance = self.balance + amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance = self.balance - amount
        else :
            print("Sorry, you need another", amount - self.balance,"Rs .To withdraw")
    def checkBalance(self):
        print("Your current Balance is ", self.balance)

b1 = Bank()
b1.openAccount(101, 'Bhavesh Goswami', 5000)

while True:

    print("*" * 50)
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Check Balance")
    print("4. Exit")
    print("*" * 50)
    choice = int(input("Enter Your Choise: "))
    print("*" * 50)     
    
    if choice == 1:
        amount = int(input('Enter Deposit Amount: '))
        b1.deposit(amount)
    elif choice == 2:
        amount = int(input('Enter Withdraw Amount: '))
        b1.withdraw(amount)
    elif choice == 3:
        b1.checkBalance()
    elif choice == 4:
        print("Thank you for Using Our Service")
        break
    else:
        print("Invalid choice, Please Try again")
        print("*" * 50)  

