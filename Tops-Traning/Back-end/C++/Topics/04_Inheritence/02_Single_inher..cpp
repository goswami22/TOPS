//  Single Inheritance


#include <iostream>
 using namespace std;
 
 class personA {
 	string name;
 	int age;
 	
 	public:
 		void getdataA(){
 			cout << "Enter your name: A\n";
 			getline(cin, name);
 			
 			cout << "Enter Your age: A\n";
 			cin >> age;
 			cin.ignore();
		 }
		 
		 void showdataA(){
		 	cout << "\n Name: "<< name;
		 	cout << "\n age: "<< age;
		 }	
 };
 
 class personB : public personA {
 	string name;
 	int age;
 	
 	public:
 		
 		void getdataB(){
 			cout << "\nEnter Your Name B: \n";
 			getline(cin, name);
 			
 			cout << "Enter your age B: \n";
 			cin >> age;
 			cin.ignore();
		 }
		 
		void showdataB(){
			cout << "\nName :" << name;
			cout << "\nage :" << age;
		} 
 };
 
 
 int main(){
 	
 	personB obj;
 	obj.getdataA();
 	obj.showdataA();
 	
 	obj.getdataB();
 	obj.showdataB();
 	
 	
 	
 	
 	
 	
 	return 0;
 }
