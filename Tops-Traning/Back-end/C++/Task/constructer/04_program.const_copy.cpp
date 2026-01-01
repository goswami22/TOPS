 #include <iostream>
 using namespace std;
 
 class Vehicle {
// 	Data member 
	string name;
 	string color;
 	int wheel;
 	int milage;
// 	member function
	 public:
	 	
	 	Vehicle(){
	 		cout<<"\nEnter Car name:";
	 		getline(cin,name);
	 		
	 		cout << "\nEnter Color:";
	 		getline(cin,color);
	 		
	 		cout<<"\nEnter how many wheel:";
	 		cin>>wheel;
	 		cin.ignore(100, '\n');
	 		
	 		cout<<"\nEnter milage:";
	 		cin>>milage;
		 }
	 	
 		void showdata(){
 			cout<<"\nname:"<<name;
 			cout<<"\ncolor:"<<color;
 			cout<<"\nWheel"<<wheel;
 			cout<<"\nMilage:"<<milage;
 			
		 }
 	
 };
 
 
 
 int main(){
 	
 	Vehicle v1;
 	
 	v1.showdata();
 	
 	
 	
 	return 0;
 }
