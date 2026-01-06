/*

	Create a new  class
*/

#include <iostream>
using namespace std;

class PersonInfo {
	public:
		string name;
		int age;
		string bithday;
		string address;
		
		void getdata(){
			cout<<"Enter your name:"<<endl;
			getline(cin, name);
			cout<<"Enter your age:"<<endl;
			cin>>age;
			cin.ignore(1000, '\n');   				// used to remove unwanted characters from the input buffer.  
													// Maximum number of characters to ignore - Safety limit (can be any big number)
													// '\n' -   Stop ignoring when newline is found
			cout<<"Enter your bithday"<<endl;
			getline(cin, bithday);
			cout<<"Enter your address"<<endl;
			getline(cin, address);
		}
		
		void showdata(){
			cout<<"\nname:"<<name;
			cout<<"\nage:"<<age;
			cout<<"\nbithday:"<<bithday;
			cout<<"\naddress:"<<address;
		}
	
};


int main(){
	PersonInfo p1, p2, p3;
	
	cout<<"perdon 1\n";
	p1.getdata();
	p1.showdata();
	
	cout<<"perdon 2\n";
	p2.getdata();
	p2.showdata();
	
	cout<< "person 3\n";
	p3.getdata();
	p3.showdata();
	return 0;
}
