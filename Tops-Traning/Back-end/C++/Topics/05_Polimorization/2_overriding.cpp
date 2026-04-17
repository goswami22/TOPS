// overriding - tow diffirent class in same name function.

#include <iostream>
using namespace std;
 
class ovr2 {
	
	public:
		void display(){
			cout << "\noverring function";
		}
}; 
class ovr : public ovr2 {
	
	public:
		void display(){
			cout << "\nOvr2 function overring function";
		}
}; 


class ovr3 : public ovr {
	public:
		void display(){
			cout << "\nanother class function";
		}
};


int main(){
	
	ovr3 ov3;
	ov3.display();
	ov3.ovr::display();				// schoop is required when call other class same name (paraent)
	ov3.ovr2::display();
	
	return 0;
}

