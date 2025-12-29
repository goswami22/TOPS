#include <iostream>
using namespace std;

int main(){
	
	int a[5],i;
	
	for(i = 0; i < 5; i++){
		cout<<"Enter a value:";
	// printf("a[%d] : [%d]": i, a[i]);		//in c method to print array
		cin>>a[i];
	}
	
	for(i = 0; i < 5; i++){
		cout<<"\n a["<< i<< "]"<<a[i];
	}
	
	
	
	return 0;
}
