// Public - Access can anyone ( inside , outside , derived )


#include <iostream>
using namespace std;

class A {
	public:
	int a = 10;
	

	private:
	int b = 20;
	
	protected:
	int c = 30;
	
	public:
	void getdataA(){
		cout << a << b << c; 
	}
};
class B : public A {
	public:
		void getdata(){
			cout << a;
//			cout << b;
			cout << c;
			
		}
};



int main(){
	
	A a1;
	cout << a1.a ;
	cout << a1.c;
	
	
	
	return 0;
}
