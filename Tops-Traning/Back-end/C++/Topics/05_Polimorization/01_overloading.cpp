// overloading - one Class and Same name fuction but different parameter.


#include <iostream>
using namespace std;

class ovr {	
	public:
		void display(){
			cout << "overloading function\n";
		}
	
		void display(int x){
			cout << "overloading function with parameter\n";
		}
		
		void display(int x, int y){
			cout << "overloading function with two parameter\n";
		}
		
};


int main(){
	ovr o1;
	o1.display();
	o1.display(20);
	o1.display(20, 30);
}

