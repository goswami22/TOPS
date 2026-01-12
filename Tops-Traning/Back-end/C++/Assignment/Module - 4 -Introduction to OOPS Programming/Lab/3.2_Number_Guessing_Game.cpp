/*
	Write a C++ program that asks the user to guess a number between 1 and 100. The
	program should provide hints if the guess is too high or too low. Use loops to allow
	the user multiple attempts.
	- Objective: Understand while loops and conditional logic.
*/
#include <iostream>
using namespace std;

int main(){
	
	int gNum, oNum = 40, i = 1;
	
	
	cout << "Guess a number between 1 to 100"<<endl;
	
	while(i <= 5){
		cout << "Guess number\n";
		cin>> gNum;
		
		if(gNum == oNum){
			cout << "correct guess\n";
			break;
		} else if(gNum <= oNum){
			cout << "Too low try other number\n";
		} else if(gNum >= oNum) {
			cout << "Too high try other number\n";
		}
		i++;
	} 
	
	
	
	return 0;
}
