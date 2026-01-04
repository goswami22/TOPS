/* Single injeritance 

   Class A						// base class  or parent class
     |
     |
   Class B						// Child class	
*/

#include <iostream>
using namespace std;

class a {
int a;

	public: 
	void getdataA(){
		cout << "\nEnter Your Value:";
		cin >> a;
	}
	
	void showdataA(){
		cout << "\na is:"<< a;
	}

};

class b : public a {
	int b;
	
	public: 
		
		void getdataB(){
			cout << "\nEnter b value";
			cin >> b;
		}
		
		void showdataB(){
			cout << "\nB is :" << b;
		}
};
	


int main(){
	
	b obj;
	
	obj.getdataA();
	obj.showdataA();
	obj.getdataB();
	obj.showdataB();
	
	
	return 0;
}
 
