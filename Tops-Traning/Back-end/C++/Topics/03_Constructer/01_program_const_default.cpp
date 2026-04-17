 #include <iostream>
 using namespace std;
 
 	class Students {
		int roll;
		char name[10];
		
		public:
//			default function
			Students(){
				cout<<"Enter Your Roll number:";
				cin>>roll;
				cout<<"Enter your name";
				cin>>name;
				
			}
			
			void showdata(){
				cout<<"\nRoll number:"<<roll;
				cout<<"\nEnter your name:"<<name;
			}
	};
 
 int main(){
	
	Students s1;
	
	s1.showdata();

	
 	
 	
 	
 	return 0;
 }
 
