// over loading - only one class inside same name function but different parameter


#include <iostream>
using namespace std;

class ovr {
	public:
		void display(){
			cout << "\noverloading only function";
		}
		void display(int x){
			cout << "\noverloading with parameter function";
		}
		void display(int x, int y){
			cout << "\noverloading with two parameter function";
		}
};


int main(){
	
	ovr o1;
	o1.display(20,6);
	o1.display(20);
	
	
	
	return 0;
}
