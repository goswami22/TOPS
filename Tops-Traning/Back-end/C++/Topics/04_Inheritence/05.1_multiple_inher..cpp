/* Multiple inheritance
	
	Class A  Class B
       \        /
        \      /
         Class C

*/
#include <iostream>
using namespace std;


class A {
	int a;
	
	public:
		void getdataA(){
			cout << "Enter A value: \n";
			cin >> a;
		}
		
		void showdataA(){
			cout << "\nA number is"<< a;
		}
	
};

class B {
	int b;
	
	
	public:
		void getdataB(){
			cout << "\nEnter B number \n";
			cin >> b;
		}
		
		void showdataB(){
			cout <<  "\nB Number is"<< b;  
		}
};

class C : public A, public B   {
	int c;
	
	public:
		void getdataC(){
			cout << "\nEnter C Number:";
			cin >> c;
		}
		
		void showdataC(){
			cout << "\nC number is:"<< c;
		}
};




int main(){
	
	C obj;
	obj.getdataA();
	obj.showdataA();
	
	obj.getdataB();
	obj.showdataB();
	
	obj.getdataC();
	obj.showdataC();


	return 0;	
}
