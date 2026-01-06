// Multi level Inheritance

#include <iostream>
using namespace std;

class Student1 {
	int roll;
	string name;
	
	public:
		void getdata1(){
			cout << "Enter your Roll number:\n";
			cin >> roll;
			
			cout << "Enter your name: \n";
			cin  >> name;
		}
		
		void showdata1(){
			cout << "\n Roll :" << roll;
			cout << "\n Name:" << name; 
		}
};

class Student2 : public Student1 {
	int roll;
	string name;
	
	public:
		void getdata2(){
			cout << "Enter your Roll Number: \n";
			cin  >> roll;
			
			cout << "Enter Your Name: \n";
			cin >> name;
		}
		
		void showdata2(){
			cout << "\n Roll: "<< roll;
			cout << "\n Name: "<< name;
		}
};

class Student3 : public Student2 {
	int roll;
	string name;
	
	public:
		void getdata3(){
			cout << "Enter your Roll Number: \n";
			cin >> roll;
			
			cout << "Enter your Name: \n";
			cin >>  name;
		}
		
		void showdata3(){
			cout << "\nRoll : "<< roll;
			cout << "\n Name: "<< name;
		}	
	
};



int main(){
	
	Student3 s;
	s.getdata1();
	s.getdata2();
	s.getdata3();
	
	s.showdata1();
	s.showdata2();
	s.showdata3();
	
	
	
	
	return 0;
}
