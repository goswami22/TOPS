// Multilevel
 
#include <iostream>
using namespace std;

class A {
	protected:
	int a,b, sum;
	
	public:
		void dataA(){
			cout << "For Sum \n";
			cout << "Enter a data: \n";
			cin >> a;
			
			cout << "Enter b data: \n";
			cin >> b;
			
			cout << "\na data is : "<<a;
			cout << "\nb data is: "<< b;
			
			sum =  a + b;
			cout << "\nSum is : "<< sum;
			
		}
};

class B : public A {
	private:
		int sub;
		
		public:
			void dataB(){
				cout << "\nFor Sub \n";
				cout << "Enter A data: \n";
				cin >> a;
				
				cout << "Enter B data: \n";
				cin >> b;
				
				sub =  a - b;
				cout << "\nSub is : "<< sub;
			}
};

class C : public B {
	private:
	int multi;
	
	public:
		void dataC(){
			cout << "\nFor Multi \n";
			cout << "Enter a data: \n";
			cin >> a;
			
			cout << "Enter b data: \n";
			cin >> b;
			
			multi = a * b;
			cout <<"\nMultiplication is :" <<multi;
		}
	
};




int main(){
	
//	B b1;
//	b1.dataA();
//	b1.dataB();
	
	C c1;
	c1.dataA();
	c1.dataB();
	c1.dataC();
	
	return 0;
}
