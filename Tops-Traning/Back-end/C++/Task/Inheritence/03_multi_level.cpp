/* Multi lavel Inherirance
   Class A
     |
     |
   Class B
     |
     |
   Class C

*/

#include <iostream>
using namespace std;

class A {
	int a;
	
	public:
		void getdata(){
			cout << "\nEnter a value: \n";
			cin >> a;
		}
		
		
		void showdata(){
			cout << "\na Value is:" << a;
		}
};

class B : public A {
	public:
	int b;
	
	public:
		void getdataB(){
			cout << "\nEnter b value:";
			cin >> b;
		}
		
		void showdataB(){
			cout << "\n b value:"<< b;
		}
};

class C : public B {
	int c;
	
	public:
		void getdataC(){
			cout << "\nEnter c value:";
			cin >> c;
		}
		
		void showdataC(){
			cout << "\n c value:"<< b;
		}
};

int main(){
	
	C obj;
	
	obj.getdata();
	obj.showdata();
	obj.getdataB();
	obj.showdataB();
	obj.getdataC();
	obj.showdataC();
	
	
	
	return 0;
}



