/*
	Write a C++ program that calculates the factorial of a number using recursion.
	- Objective: Understand recursion in functions.
*/
#include <iostream>
using namespace std;

int factNum(int num){
	int i , factN = 1;
	
//	for(i = 1; i <= n; i++){
//		factN = factN * i;
//	}

	if(num == 0 || num == 1){
		return 1;
	}
	        	
	return num * factNum(num - 1);
}



int main(){
	
	int num;
	
	cout << "Enter Number: "<< endl;
	cin >> num;
	
//	for(i = 1; i <= num; i++){
//		fact = fact * i;
//	}

	
	
	cout << "Factorial number is "<< factNum(num);
	
	return 0;
}

