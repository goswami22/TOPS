/* 	
	Module - 4 -Introduction to OOPS Programming
	
	Create a lecture management System 
	
	Define a class to represent lecture details. Include the following members and the
	program should handle at least details of 5 lecturers.
	
	Data members:
	a) Name of the lecturer
	b) Name of the subject
	c) Name of course
	d) Number of lecturers
	
	Data functions:
	a) To assign initial values
	b) To add a lecture details
	c) To display name and lecture details
	
	Make sure you have to use constructor concept in it
	Make sure all naming conversion properly mention in this project work
	Make sure all method name
	
	Use class and object concepts
	
	Upload all features in develop branch after completion all features
	merge it with the main branch.
	
*/

#include <iostream>
using namespace std;

class LectureDetails {
	private:
		string lecturer;
		string subject;
		string course;
		int NumberOfLecturers;
		
	public:
		LectureDetails() {
			lecturer = "";
			subject = "";
			course = "";
			NumberOfLecturers = 0;
		}
	 void addLectureDetails(){
//	 		Enter lecturer Name
			cout << endl;
	 		cout << "Enter Name of Lecturer: " << endl;
	 		getline(cin, lecturer);
	 		
//	 		Enter Subject Name
	 		cout << "Enter Name of Subject: " << endl;
	 		getline(cin, subject);
	 		
//	 		Enter Course Name
	 		cout << "Enter Name of Course: " << endl;
	 		getline(cin, course);
	 		
//	 		Enter 
	 		cout << "Number of Lecturers: " << endl;
	 		cin >> NumberOfLecturers;
	 		cin.ignore();
		 }
		 
		 void showDetails(){
		 	cout << "Lecturer Name: "<< lecturer << endl;
		 	cout << "Subject Name    " << subject << endl;
		 	cout << "Course Name    " << course << endl;
		 	cout << "Number of Lecturers: " << NumberOfLecturers;
		 }
	
};


int main(){
	LectureDetails l1, l2, l3, l4, l5;
//	l1.lectureDetails();					// not required in constructer automatically call
	
	cout << "\n ======= first lecturer details ======= " << endl;
	l1.addLectureDetails();
	cout << "\n ======= secound lecturer details ======= " << endl;
	l2.addLectureDetails();
	cout << "\n ======= Third lecturer details ======= " << endl;
	l3.addLectureDetails();
	cout << "\n ======= Forth lecturer details ======= " << endl;
	l4.addLectureDetails();
	cout << "\n ======= fifth lecturer details ======= " << endl;
	l5.addLectureDetails();
	
	cout << "Show Details" << endl;
	cout << "======= First Lecture  ======= "<< endl;
	l1.showDetails();
	cout << "\n======= second Lecture  ======= "<< endl;
	l2.showDetails();
	cout << "\n======= Third Lecture  ======= "<< endl;
	l3.showDetails();
	cout << "\n======= Forth Lecture  ======= "<< endl;
	l4.showDetails();
	cout << "\n======= Fifth Lecture  ======= "<< endl;
	l5.showDetails();
	
	
	
	return 0;
}
