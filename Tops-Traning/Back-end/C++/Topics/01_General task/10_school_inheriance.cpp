#include <iostream>
using namespace std;

class School{
	protected:
	string sc_name, sc_add, stu_name, stu_roll, stu_class;
	int t_fee = 5000;
	int re_fee;
	int p_fee;
	int t_sub;
	int t_marks;
	float per;
	
		
	public:
		void getdataA(){
			cout << "Enter School name:\n";
			getline(cin, sc_name);
			
			cout << "Enter School Addess: \n";
			getline(cin, sc_add);
		}
		
		void showdata(){
			cout << "\n School name is :"<<sc_name;
			cout << "\n School address :"<< sc_add;
		}
		
};

class Student : public School{
	public:
		void getdataB(){
				
				cout << "\nEnter Student name: \n";
				getline(cin, stu_name);
				
				
				cout << "\nEnter Student Class:";
				cin >> stu_class;
				
				cout << "\nEnter Student Roll Number:";
				cin >> stu_roll;
				cin.ignore();
		}		
		
		void sowdataB(){
			cout << "\nStudent name is "<< stu_name;
			cout << "\nStudent class :"<< stu_class;
			cout << "\nStudent Roll Number : "<< stu_roll;
		}
};

class fees : public Student {
	public:
		void getdataC(){
			cout << "\nStudent Total fee" << t_fee;
			
			
			cout << "\nStudent paid fee";
			cin >> p_fee;
			
			re_fee = t_fee - p_fee;
		}
		
		void showdataC(){
			cout << "\nTotal Fee"<< t_fee;
			cout << "\nPaid Fee"<< p_fee;
			cout <<"\nRemaining Fee"<< re_fee;
		}
		
};

class result {
	public:
		void getdataD(){
			cout >> "\nEnter Total Subject";
			cin << t_sub;
			
			cout >> "\nEnter Total Marks";
			cin << t_marks;
			
			
			per = t_marks 
			
			cout >> "\nEnter Total Subject";
			cin << per;

				
		}
		
	
};


int main(){
	fees f1;
	f1.getdataA();
	f1.getdataB();
	f1.getdataC();
	f1.showdata();
	f1.sowdataB();
	f1.showdataC();
	
	
	return 0;
}
