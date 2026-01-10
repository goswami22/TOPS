/*
	Write a program that implements inheritance using a base class Person and derived
	classes Student and Teacher. Demonstrate reusability through inheritance.
	- Objective: Learn the concept of inheritance
*/

#include <iostream>
using namespace std;

class Person {
	private:
	string name;
	int age;
	
	public:
		void data(){
			cout << "Enter Your name:" << endl;
			getline(cin, name);
			
			cout << "Enter Your age:" << endl;
			cin  >> age;
			
			cin.ignore();
			cout << "Name: "<< name << endl;
			cout << "Age: " << age << endl;
		} 
};

class Teacher : public Person {
	private:
		int id;
		string subject;
		
	public:
		void dataT(){
			cout << "Enter  Teacher id: " << endl;
			cin >> id;
			
			cout << "Enter Teacher Subject: " << endl;
			cin.ignore();
			cin >> subject;
			
			
			cout << "Teacher Id: "<< id << endl;
			cout << "Teacher subject: " << subject << endl;  
		}	
};

class Student : public Person {
	private:
		int roll;
		int marks;
		
	public:
		void dataS(){
			cout << "Enter Student Roll No. ";
			cin >> roll;
			
			cout << "Enter student Marks: ";
			cin >> marks;
			
			cout << "Roll Number: "<< roll << endl;
			cout << "Marks " << marks << endl;
		}	
};


int main(){
	
	Teacher t1;
	t1.data();
	t1.dataT();
	
	Student s1;
	s1.data();
	s1.dataS();
	
	return 0;
}
