/*
	Create a class BankAccount with data members like balance and member functions
	like deposit and withdraw. Implement encapsulation by keeping the data members
	private.
	- Objective: Understand encapsulation in classes.

	
*/
#include <iostream>
using namespace std;

class bankaccount {
	private:
		string bankName;
		int accoutNo;
		int amount;
		int depositAmount;
		int withdrawAmount;
		
		
	public:
	
	void bankdetail(){
	
		cout << "Enter Bank Name: ";
		getline(cin, bankName);
		
		cout << "Enter accout No: ";
		cin >> accoutNo;
		cin.ignore();
		
		cout << "Bank Name: " << bankName << endl;
		cout << "Account No: " <<accoutNo << endl;
	}
	
	void bankAmmount(){
			amount = 5000;

			cout << "Accout Balance : "<< amount << endl;		
	}
	
	void deposit(){
		cout << "Enter Deposit Ammount: ";
		cin >> depositAmount;
		
		
		amount = amount + depositAmount;
		
		cout << "deposit Amount: " << amount << endl;
	}
	
	void withdraw(){
		cout << "Enter withdraw Amount:";
		cin >> withdrawAmount;
		
		if(amount >= withdrawAmount){
			amount = amount - withdrawAmount;
			cout << "Remaining Amount: " << amount << endl;
		} else if(amount >= withdrawAmount) {
			cout << "Amount insufficient!"<< endl;
		}
	}


};

int main(){
	
	bankaccount b1;
	b1.bankdetail();
	b1.bankAmmount();
	b1.deposit();
	b1.withdraw();
	
	return 0;
}
