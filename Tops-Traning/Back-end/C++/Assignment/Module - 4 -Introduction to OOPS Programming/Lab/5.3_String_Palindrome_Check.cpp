/*
	Write a C++ program to check if a given string is a palindrome (reads the same forwards and backwards).
	- Objective: Practice string operations.
*/

#include <iostream>
#include <algorithm>
using namespace std;

int main(){
	
	string str, rev;
	
	cout << "Enter any word: ";
	cin >> str;
	
	rev = str;
	reverse(rev.begin(), rev.end());	
		
	if(str == rev ){
		cout << "String is palindrame" << endl;
	} else {
		cout << "String is not palindrame" << endl;
	}
	
	
	return 0;
}
