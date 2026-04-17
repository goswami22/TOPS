// hierarchical inheritance

#include <iostream>
using namespace std;

class A {
	int a;
	
	public:
		void dataA(){
			cout << "Enter a Value;";
			cin >> a; 
			cout << "\n A value is :"<< a;
		}
};

class B : public A {
	int b;
	
	public:
		void dataB(){
			cout << "Enter b Value;";
			cin >> b; 
			cout << "\n B value is :"<< b;
		}
};

class C : public A {
	int c;
	
	public:
		void dataC(){
			cout << "Enter c Value;";
			cin >> c; 
			cout << "\n C value is :"<< c;
		}
};




int main(){
	
	C c1;
	c1.dataA();
	c1.dataC();
	
	B b1;
	b1.dataA();
	b1.dataB();
	
	
	
	
	return 0;
}
