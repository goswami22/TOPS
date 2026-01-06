// class and object

#include <iostream>
using namespace std;

class Students {							// blueprint for student objects
	
	public:									// Access specifier  - Members inside public can be accessed from main()  - private / protected
//		char name[10];
		string name;
		int age;
		float marks;
		
		void getdata(){							// Member function to take input  -   void means it does not return any value
			cout<<"Enter your name:\n";
			getline(cin, name);					// Always use getline() for names, addresses, sentences. for spacing without only cin is ignore space
			cout<<"Enter your age:\n";
			cin>>age;
			cout<<"Enter your marks:\n";
			cin>>marks;
		} 
		
		void showdata(){						// Member function to display data
			cout << "\nname:" << name;
			cout << "\nage:" << age;
			cout << "\nmark:" << marks; 
		}
};



int main(){
	Students s;									// Creates an object s of class Students
	
	s.getdata();
	s.showdata();								// Calls getdata() function using object s
	
	
	return 0;									//  Ends program successfully
}	



