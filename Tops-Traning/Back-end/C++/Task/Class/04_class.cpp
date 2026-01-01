 #include <iostream>
 using namespace std;
 
 class Person {
	public: 
		string name;
		int age;
		string gender;
		int phone;
		
		void getdata(){
			cout<<"Enter your name"<< endl;
			getline(cin,name);
			cout << "Enter your age" << endl;
			cin >> age;
			cin.ignore(1000, '\n');
			cout << "Enter your gender" << endl;
			cin >> gender;
			cout << "Enter your phone number" << endl;
			cin >> phone;
			
			cin.ignore(1000, '\n');
		}
		
		void showdata(){
			cout << "\nName:"<<name;
			cout << "\nAge:" << age;
			cout << "\nGender :" << gender;
			cout << "\nPhone :" << phone;
		}
		
	
	
	 	
 };
 
 
 int main(){
 	
 	Person p1, p2, p3;

 	cout << "\nPerson 1" << endl;
 	p1.getdata();
	p1.showdata();
 	
 
 	cout << "\nperson 2" <<endl;
 	p2.getdata();
 	p2.showdata();
 	
 	cout << "\nPerson 3" << endl;
 	p3.getdata();
 	p3.showdata();
 
 
 
 	return 0;
 }
 
