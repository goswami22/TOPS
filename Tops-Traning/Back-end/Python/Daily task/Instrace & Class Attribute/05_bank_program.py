'''
    Create a class BankAccount with:
    instance variables: account_no, balance
    instance methods:
    deposit(amount)
    withdraw(amount)
'''

class BankAccount:

    def __init__(self, account_no, balance):
        self.account_no = account_no
        self.balance = balance

    def accountInfo(self):
        print("Bank Account No:", self.account_no)
        print("Bank Balance:", self.balance)

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"Withdrawn {amount}. New balance: {self.balance}")
        else:
            print("Insufficient balance")
b1 = BankAccount(123, 5000)
b1.accountInfo()
b1.deposit(5000)
b1.withdraw(2000)
