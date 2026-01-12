/*
	2.	Basic Input/Output 
	-  Write a C++ program that accepts user input for their name and age and then displays a personalized greeting. 
	-  Objective: Practice input/output operations using cin and cout
*/


#include <iostream>
using  namespace std;


int main(){
	string name;
	int age;
	
	cout << "Enter your name: ";
	getline(cin, name);
	
	cout << "Enter your age: ";
	cin >> age;
	
	cout << "\nYour name is "<< name;
	cout << "\nYour age is "<< age;
	
	return 0;
}
