#include <iostream>
using namespace std;

class StudentInfo {
	public:
		string name;
		int age;
		int roll;
		string subjectName;
		int TotalMarks;
		
		void getdata(){
			cout << "\n Enter Your name: \n";
			getline(cin, name);
			
			cout << "\nEnter your age:";
			cin >> age;
			
			cout << "\nEnter roll number:";
			cin >> roll;
			
			cin.ignore(1000, '\n');
			
			cout << "\nEnter your subject name:";
			getline(cin, subjectName);
			
			cout << "\nEnter Your marks:"<< endl;
			cin >> TotalMarks;
			cin.ignore(1000, '\n');
		}
		
		void showdata(){
			cout << "\nname:" << name;
			cout << "\nage:" << age;
			cout << "\nRoll number"<< roll;
			cout << "\nSubject Name:" << subjectName; 
			cout << "\nTotal Marks:" << TotalMarks;
		}
	
	
};



int main(){
	StudentInfo s1, s2, s3;
	
	cout<< "\nStudent Info 1";
	s1.getdata();
	s1.showdata();
	
	cout<< "\nStudent Info 2";
	s2.getdata();
	s2.showdata();
	
	cout << "\nStudent Info 3";
	s3.getdata();
	s3.showdata();
	
	return 0;
}
