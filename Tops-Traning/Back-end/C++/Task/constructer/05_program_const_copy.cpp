 #include <iostream>
 #include <cstring>
 using namespace std;
 
 	class Students {
// 	data member
		string name1;
		int roll;
		int marks;
		float percentge;
		
//		data fuction
	public:
		Students(){
			cout << "\nEnter your name:";
			getline(cin,name1);
			
			cout << "\nEnter your Roll Number";
			cin  >> roll;
			cin.ignore(100, '\n');
			
			cout << "\nEnter your marks";
			cin >> marks;
			
			cout << "\nEnter your percentege";
			cin >>  percentge;
			cin.ignore(100, '\n');
		}
//		with parameter
		Students(string n,int ro,int mk, float per){
			name1 = n;
			roll = ro;
			marks  = mk;
			percentge = per;
		}
//		copy construction
		Students(Students &sn){
			name1= sn.name1;
			roll = sn.roll;
		}
		
		
		
		
		void showdata(){
			cout << "\nName: "<< name1;
			cout << "\nRoll number :"<<roll;
			cout << "\nMarks : " <<marks;
			cout << "\npercentge :" << percentge;
		}
 };
 int main(){

		Students s1, s2("bhavesh", 1,88,98),s3(s1);
		
		s1.showdata();	
		s2.showdata();
		s3.showdata();
	
 	
 	
 	return 0;
 }
