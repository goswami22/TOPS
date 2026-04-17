/*
	Write a program that demonstrates the difference between local and global
		variables in C++. Use functions to show scope.
	- Objective: Reinforce the concept of variable scope.
*/

#include <iostream>
using namespace std;

	string name = "Bhavesh";
	
	void num(){
		int n = 5;
		cout << "\nLocal variable - Number is: " << n;
		cout << "\nGlobal variable:" << name; 
	}

int main(){
	num();
	
//	cout << "Local variable - Num:" << n;
	cout << "Global variable - Name:" << name;
	return 0;
}
