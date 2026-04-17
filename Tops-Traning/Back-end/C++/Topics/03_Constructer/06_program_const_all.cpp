#include <iostream>
using namespace std;

class Person {
//	data variable
	string name;
	int age;
	int birthday;
	string address;
	
	// member function
	public:
		Person(){
			cout << "\nEnter your name:";
			getline(cin,name);
			
			cout << "\n Enter your age:";
			cin >> age;
			cin.ignore(100, '\n');
			
			cout << "Enter your birthday:";
			cin >> birthday;
			
			cin.ignore(100, '\n');
			cout << "Enter your addess:";
			cin >> address;
		}
		
//		parameter method
		Person(string n,int ag, int bt){
			name = n;
			age = ag;
			birthday = bt;
			
			
		}
		
		
		void showdata(){
			cout << "\nName:"<<name;
			cout << "\nage:" <<age;
			cout << "\nbirdthday:"<< birthday;
			cout << "\naddress:" << address;
		}
	
};




int main(){
	
	Person p1, p2("Bhavesh Goswami",25,31-10-1992);
	
	p1.showdata();	
	
	
	
	return 0; 
}
