/*
	Write a C++ program that takes a student’s marks as input and calculates the grade based on if-else conditions.
*/

#include <iostream>
using namespace std;

int main(){
	int marks;
	
//	Students input marks
	cout << "\nEnter Marks here : "<< endl;
	cin >> marks;
	
	if(marks >= 100 || marks <= 0 ){
		cout << "\nInvalid number";
	}else if(marks >= 80 && marks < 100){
		cout << "\nGrade A";
	}else if(marks >= 60 && marks < 80){
		cout << "\nGrade B";
	}else if(marks >= 40 && marks < 60){
		cout << "\nGrade C";
	} else {
		cout <<"Your are Fail";
	}
	
	
	return 0;
}
