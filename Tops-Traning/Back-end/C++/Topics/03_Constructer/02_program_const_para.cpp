#include <iostream>
using namespace std;

class PersonDetail {
	
	string name;
	int age;
	string gender;
	
	public:
		PersonDetail(){
			cout<<"Enter your name:";
			getline(cin,name);
			cout<<"Enter Your age:";
			cin>>age;
			cin.ignore(1000, '\n');
			cout<<"Enter your gender:";
			cin>>gender;
			cin.ignore(1000, '\n');
		}
		
		PersonDetail(){
			
		}
		
		void showdata(){
			cout<<"\n Name:"<<name;
			cout<<"\n Age:"<<age;
			cout<<"\n Gender:"<<gender;
		}
	
};



int main(){
	
	PersonDetail p1, p2, p3;
	p1.showdata();
	p2.showdata();
	p3.showdata();
	
	return 0;
}
