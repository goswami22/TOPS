// single inheriatance

 #include <iostream>
 using namespace std;

class A {
	int a;
	
	public:
		void getdataA(){
			cout << "Enter a value\n";
			cin >> a;
		}
		
		void showdataA(){
			cout << "\n A :" << a;
		}
};

class B : public A {
	
	int b;
	public:
		void getdataB(){
			cout << "Enter b value\n";
			cin >> b;
		}
		
		void showdataB(){
			cout << "\n B :"<< b;
		}
}; 
 
 
 
 int main(){
 	
 	B obj;
 	obj.getdataA();
 	obj.showdataA();
 	
 	obj.getdataB();
 	obj.showdataB();
 	
 	
 	
 	
 	return 0;
 }
