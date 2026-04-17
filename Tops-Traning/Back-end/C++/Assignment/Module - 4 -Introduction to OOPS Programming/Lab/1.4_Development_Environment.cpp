/*
	Write a program that asks for two numbers and displays their sum. Ensure this is
	done after setting up the IDE (like Dev C++ or CodeBlocks).
	o Objective: Help students understand how to install, configure, and run programs
	inan IDE.
*/

#include <iostream>
using namespace std;

int main(){
	
	int num1, num2, sum = 0;
	
	cout << "Enter Number 1:";
	cin >> num1; 	
	
	cout << "Enter Number 2:";
	cin >> num2;
	
	sum = num1 + num2;
	
	cout << "Sum is :"<< sum;
	
	return 0;
}
