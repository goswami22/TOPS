// hybrid inheritance

#include <iostream>
using namespace std;

class A {
	int a;
	
	public:
		void getdataA(){
			
		}
		
		void showdataA(){
			
		}
};
class B : virtual public A {
	int b;
	
	public:
		void getdataA(){
			
		}
		
		void showdataA(){
			
		}
};

class C : virtual public A {
	int c;
	
	public:
		void getdataA(){
			
		}
		
		void showdataA(){
			
		}
};
class D : public B, public C {
	int d;
	
	public:
		void getdataA(){
			
		}
		
		void showdataA(){
			
		}
};


int main(){
	
	return 0;
}

