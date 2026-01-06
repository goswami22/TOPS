/*
	Hyrachical : A - B, A - C;
	
	     Class A					// base class  or parent class
       /       \
  Class B     Class C				// child class	
	

*/

#include <iostream>
using namespace std;

class A {
	int a;
	
	public:
		void getdata(){
			cout << "Enter a value: \n";
			cin >> a;
		}
		
		void showdata(){
			cout << "\na value is:"<< a;
		}
};

class B : public A {
	int b;
	
	public:
		void getdataB(){
			cout << "Enter b value: \n";
			cin >> b;
		}
		
		void showdataB(){
			cout << "\nb value is:"<< b;
		}
};

class C : public A {
	int c;
	
	public:
		void getdataC(){
			cout << "Enter c value:";
			cin >> c;
		}
		
		void showdataC(){
			cout << "\nc value is:"<< c;
		}
};

int main(){
	
	C objC;
	objC.getdata();
	objC.showdata();
	objC.getdataC();
	objC.showdataC();
	
	B objB;
	objB.getdata();
	objB.showdata();
	objB.getdataB();
	objB.showdataB();
	
	return 0;
}
