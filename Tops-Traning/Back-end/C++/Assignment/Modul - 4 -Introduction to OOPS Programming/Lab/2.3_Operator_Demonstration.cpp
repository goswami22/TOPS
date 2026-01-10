/*
	Write a C++ program that demonstrates arithmetic, relational, logical, and bitwise
	operators. Perform operations using each type of operator and display the results.
	- Objective: Reinforce understanding of different types of operatorsin C++ 
*/
 
 
 #include <iostream>
 using namespace std;
 
 int main(){
 	
 	int a , b, sum, sub, multi, div, mod;
 	int marks;
 	
// 	value from user
	cout << "Enter a value: ";
	cin >> a;
	
	cout << "Enter b value: ";
	cin >> b;
	
//	arithmetic operater
	sum = a + b;
	cout << "\nAddtion is :" <<sum;

	sub = a - b;
 	cout << "\nsubstraction is :"<< sub;
 	
 	multi = a * b;
 	cout << "\nMultiplication is :"<< multi;
 	
 	div = a / b;
 	cout << "\nDivition is :"<< div;
 	
 	
 	mod = a % b;
 	cout << "\nModulas is : "<< mod;
 	
 	
// Relational operater
	cout << "\nEnter Marks:"<< endl;
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
