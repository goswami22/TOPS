// multi level

#include <iostream>
using namespace std;

class StudentA {
	string name;
	int roll;
	
	public:
		void getdataA(){
			cout << "Enter Student name:\n";
			getline(cin, name);
			
			cout << "\nEnter Student roll number:";
			cin >> roll;
			cin.ignore(100, '\n'); 
		}
		
		void showdataA(){
			cout << "\n Student Name:"<<name;
			cout << "\n Roll Number:"<< roll;
		}	
};

class StudentB : public StudentA {
	string name;
	int roll;
	
	
	public:
		void getdataB(){
			cout << "\nEnter Student Name:";
			getline(cin, name);
			
			cout << "\nEnter Student Roll Number:";
			cin >> roll;
			cin.ignore();
		}
		
		void showdataB(){
			cout << "\n Student Name:"<< name;
			cout << "\n Student Roll Number"<< roll;
		}
		
		
};

class StudentC : public StudentB {
	string name;
	int roll;
	
	public:
		void getdataC(){
			cout << "\nEnter Student Name";
			getline(cin, name);
			
			cout << "\nEnter Student Roll Number:";
			cin >> roll;
			cin.ignore();
		}
		
		void showdataC(){
			cout << "\n Student Name:"<< name;
			cout << "\n Student Roll number:"<< roll;
		}
	
	
};

int main(){
	
	StudentC C1, C2, C3;
	C1.getdataA();
	C1.showdataA();
	
	C2.getdataB();
	C2.showdataB();
	
	C3.getdataC();
	C3.showdataC();
	
	
		
	return 0;
}
