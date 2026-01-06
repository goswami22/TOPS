 // hybrid inheritance
 
 #include <iostream>
 using namespace std;
 
class A {
	int a;
	
	public:
		void dataA(){
			cout << "Enter a value";
			cin >> a;
			cout << "\n A value is:"<< a;
		}
		
};

class B : virtual public A {
	int b;
	
	public:
		void dataB(){
			cout << "Enter b value";
			cin >> b;
			cout << "\n B value is:"<< b;
		}
};

class C : virtual public A {
	int c;
	
	public:
		void dataC(){
			cout << "Enter C value";
			cin >> c;
			cout << "\n C value is:"<< c;
		}
};

class D : public B, public C {
	int d;
	
	public:
		void dataD(){
			cout << "Enter D value";
			cin >> d;
			cout << "\n D value is:"<< d;
		}
}; 

 
 
 int main(){
 	
 	D d1;
 	d1.dataA();
	d1.dataB();
	d1.dataC();
	d1.dataD(); 	
 	
 	return 0;
 }
 
 
 
 
 
 
