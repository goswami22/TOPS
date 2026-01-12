/*
	Write a C++ program that performs both implicit and explicit type conversions and
	prints the results.
	- Objective: Practice type casting in C++
*/

#include <iostream>
using namespace std;

int main(){
	
	int num1;
	float num2, result;
	int n;
	
	
	
	
	cout << "==== implicit type conversion ===="<< endl;
	
	cout << "Enter number 1:"<< endl;
	cin >> num1;
	
	cout << "Etner number 2:"<< endl;
	cin >> num2;
	
	
	
	result = num1 + num2;
	
	cout << "num1 is integer but when add num2 it convert in to float %f"<< result<< endl;
	
	cout <<"==== explicit type conversions ==="<< endl;
	
	n = (int)num2;
	
	cout << "Number is "<< num2 <<endl;
	cout <<"after expicit conversion int \n"<< n;
	
	
	
	
	return 0;
}
