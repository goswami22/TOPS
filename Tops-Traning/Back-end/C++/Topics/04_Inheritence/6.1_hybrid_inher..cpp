/* 
	hybrid: Two combine 

	    Class A									// base class  or parent class
       /       \
  Class B     Class C							// Child of A, Parent of D	
       \       /
        \     /
         Class D								// child class
*/

#include <iostream>
using namespace std;

class A {
	int a;
	
	public:
		void getdataA(){
			cout << "Enter a value \n";
			cin >> a;
		}
		
		void showdataA(){
			cout << "\n a value is : "<< a;
		}
};

class B : virtual public A {
	int b;
	
	public:
		void getdataB(){
			cout << "Enter b value \n";
			cin >> b;
		}
		
		void showdataB(){
			cout << "\n b value is : "<< b;
		}
};

class C : virtual public A {
	int c;
	
	public:
		void getdataC(){
			cout << "Enter c value \n";
			cin >> c;
		}
		
		void showdataC(){
			cout << "\n c value is : "<< c;
		}
};

class D : public B, public C {
	int d;
	
	public:
		void getdataD(){
			cout << "Enter d value \n";
			cin >> d;
		}
		
		void showdataD(){
			cout << "\n d value is : "<< d;
		}
};



int main(){
	
	D objD;
	objD.getdataA();
	objD.showdataA();
	objD.getdataB();
	objD.showdataB();
	objD.getdataC();
	objD.showdataC();
	objD.getdataD();
	objD.showdataD();
	
	
	return 0;
}
