/*
	Write a C++ program to display the multiplication table of a given number using a for loop.
	- Objective: Practice using loops.
*/

#include <iostream>
using namespace std;

int main(){
	
	int num, i , result;
	
	cout << "Enter Table number\n";
	cin >> num;
	
	
	for(i = 1; i <= 10; i++){
		result = num * i;
		cout << num << " x "<< i << " = "<< result <<endl;  
	}
	
	return 0;
}
