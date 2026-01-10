 #include <iostream>
 using namespace std;
 
 class bankinfo {
 	private:
 		string bankname;
 		string username;
		int balance;
		int deposit;
		int withdraw;
		int password;
		 		
	public:
	void userdetail(){
//		getdata from user
		cout << "Enter Bank Name: ";
		getline(cin, bankname);
		
		cout << "Enter Your Name: ";
		getline(cin, username);
		
//		user data show 
		cout << "Bank Name: " << bankname << endl;
		cout << "User Name: " << username << endl;
 	}	 	
 	
 	void accdetail(){
 		balance = 5000;
		 cout << "Accout Balance: " << balance << endl;		
	 }
 };
 
 int main(){
 		
 		bankinfo b1;
 		b1.userdetail();
 		b1.accdetail();
	 			
 	return 0;
 }
 
 
 
 
 
