/*
	Write a C++ program that accepts an array of integers, calculates the sum and average, and displays the results.
	- Objective: Understand basic array manipulation.
*/

#include <iostream>
using namespace std;

int main(){
	
	int a[5],i;
	
	for(i = 0; i < 5; i++){
		cout <<"a[" << i <<"]: ";
		cin >> a[i];
	}
	
	for(i = 0; i < 5; i++){
		cout << "a["<<i<<"]"<< a[i]<<endl;
	}
	
	
	return 0;
}
