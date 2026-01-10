/*
	Write a program that prints a right-angled triangle using stars(*) with a nested loop.
	- Objective: Learn nested control structures.
*/

#include <iostream>
using namespace std;

int main(){
	
	int i, j;
	
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= i; j++){
			cout << "* ";
		}
		cout << "\n";
	}
	return 0;
}
