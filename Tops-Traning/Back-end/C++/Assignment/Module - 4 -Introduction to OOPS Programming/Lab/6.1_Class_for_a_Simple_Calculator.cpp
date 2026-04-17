/*
	Write a C++ program that defines a class Calculator with functions for addition,
	subtraction, multiplication, and division. Create objects to use these functions.
	o Objective: Introduce basic classstructure

*/

#include <iostream>
using namespace std;

class userValue{
	protected:
	int a, b, addNum, subNum, multiNum, divNum;
	
	public:
		void getdata(){
			cout << "Enter a value: ";
			cin >> a;
			
			cout << "Enter b value: ";
			cin >> b;
		}
		
		void showdata(){
			cout << "a: "<< a;
			cout << "\nb: " << b;
		}
		
//		For sum
		void sumdata(){
			cout << "\nAddtion is "<< a + b << endl;
		}
		
//		For substraction
		void subdata(){
			cout << "\nSubstractio is "<< a - b << endl; 
		}
		
//		For Multiplication 
		void multidata(){
			cout << "\nMultiplication is "<< a * b << endl;
		}
		
//		For Division
		void divdata(){
			if(b != 0){
				cout << "\nDivition is" << (float)a / b;
			} else {
				cout << "Divition is not posible(divide by zero)";
			}
		}
		
};

int main(){	
	
	userValue obj;
	obj.getdata();
	obj.showdata();
	obj.sumdata();
	obj.subdata();
	obj.multidata();
	obj.divdata();
	
		
	return 0;
}
