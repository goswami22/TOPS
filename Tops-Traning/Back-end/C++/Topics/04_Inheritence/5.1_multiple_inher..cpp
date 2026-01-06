 // Multilavel inheritance
 
 #include <iostream>
 using namespace std;
 
 class A {
 		int a;
 		
 		public:
 		void getdata(){
 			cout << "Enter a Value\n";
 			cin >> a;
		 }
		 
		 void showdata(){
		 	cout << "\n a value is:"<< a;
		 }
	 };
 	
	class B {
 		int b;
 		
 		public:
 		void getdataB(){
 			cout << "Enter b Value\n";
 			cin >> b;
		 }
		 
		 void showdataB(){
		 	cout << "\n b value is:"<< b;
		 }
	 };
	 
	class C : public A, public B {
 		int c;
 		
 		public:
 		void getdataC(){
 			cout << "Enter c Value\n";
 			cin >> c;
		 }
		 
		 void showdataC(){
		 	cout << "\n c value is:"<< c;
		 }
	 };
 
 
 
 int main(){
 
 	C obj;
 	
 	obj.getdata();
 	obj.showdata();
 	
 	obj.getdataB();
 	obj.showdataB();
 	
 	obj.getdataC();
 	obj.showdataC();
 	
 	
	 
	 	
 	return 0;
 }
 
