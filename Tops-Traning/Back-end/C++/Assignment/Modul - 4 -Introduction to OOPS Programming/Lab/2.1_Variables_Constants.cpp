/*
	Write a C++ program that demonstrates the use of variables and constants. Create
		variables of different data types and perform operations on them.
	- Objective: Understand the difference between variables and constants.	
*/


#include <iostream>
using namespace std;

int main(){
	
	const float PI= 3.14;
	float radius, area;
	
	
	cout << "Enter Circle radius: ";
	cin>> radius;
	
	area = PI * radius * radius;
	
	cout << "Area of circle is "<< area; 
	
	
	return 0;
}
