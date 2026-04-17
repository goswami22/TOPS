/*
	Write a C++ program that defines functions for basic arithmetic operations (add,
	subtract, multiply, divide). The main function should call these based on user input.
	- Objective: Practice defining and using functions in C++.
*/

#include <iostream>
using namespace std;

int a, b, sum, sub, multi, div, mod;

void sumN(int a, int b){
	sum = a + b;
	cout << "Addion is "<< sum << endl;
}

void  subN(int a, int b){
	sub = a - b;
	cout << "Substraction is "<< sub << endl;
}

void multiN(int a, int b){
	multi = a * b;
	cout << "Multiplication is "<< multi << endl;
}

void divN(int a, int b){
	div = a / b;
	cout << "Division is "<< div << endl; 
}
void modN(int a, int b){
	mod = a % b;
	cout << "Module is "<< mod << endl;
} 

int main(){
	
	
	
	int a ,b, choice;
	
	cout << "Enter a value: ";
	cin >> a;
	
	cout << "Enter b value: ";
	cin >> b;
	
	cout << "1. Addition"<< endl;
	cout << "2. Substraction"<< endl;
	cout << "3. Multipication"<< endl;
	cout << "4. Divition"<< endl;
	cout << "5. Module"<< endl;
	
	
	cout << "Enter a choice ";
	cin >> choice;
	
	switch(choice){
		case 1:
			sumN(a ,b );
			break;
		case 2:
			subN(a, b);
			break;	
		case 3:
			multiN(a , b);
			break;
		case 4:
			divN(a , b);
			break;
		case 5:
			modN(a , b);
			break;
		default:
			cout << "Enter valid number"<< endl;
	}
	
	return 0;
}
