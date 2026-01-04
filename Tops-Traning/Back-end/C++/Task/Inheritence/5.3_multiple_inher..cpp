// multiple inheritance

#include <iostream>
using namespace std;
class A{
	int a;
	
	public:
		void dataA(){
			cout << "Enter a value:";
			cin >> a;
			cout << "\n A value is : "<< a;
			
		}
};

class B{
	int b;
	
	public:
		void dataB(){
			cout << "Enter b value:";
			cin >> b;
			cout << "\n B value is : "<< b;
			
		}
};

class C :  public A, public B{
	int c;
	
	public:
		void dataC(){
			cout << "Enter C value:";
			cin >> c;
			cout << "\n C value is : "<< c;
			
		}
};


int main(){
	
	C c1;
	c1.dataA();
	c1.dataB();
	c1.dataC();
	
	
	
	return 0;
}
