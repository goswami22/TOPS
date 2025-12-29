/*
	find max munber 
*/

#include <iostream>
using namespace std;

int main(){
	int a, b,c;
	
	cout<<"Enter a value:";
	cin>>a;
	
	cout<< "Enter b value:";
	cin >> b;
	
	cout<< "Enter c value";
	cin >> c;
	
	if(a > b && a > c){
		cout<<"a is larger number"; 
	} else if(b > c && b > a){
		cout<< "b is larger number";
	} else {
		cout<<"c is larger numeber"; 
	}
	
	
	return 0;
}

