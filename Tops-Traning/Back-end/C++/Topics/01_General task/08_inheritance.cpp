// single inheritance

#include <iostream>
using namespace std;


class A {
	private:
	int a;
	
	public:
		void dataA(){
			cout << "Enter A value: \n";
			cin >> a;
			cout << "\na is value"<< a;
		}
};


class B : public A {
	private:
	int b;
	
	public:
		void dataB(){
			cout << "Enter B value: \n";
			cin >> b;
			cout << "\nb value is: "<< b;
		}
	
};

int main(){
	
	B b1;
	b1.dataA();
	b1.dataB();	
	
	
	return 0;
}
