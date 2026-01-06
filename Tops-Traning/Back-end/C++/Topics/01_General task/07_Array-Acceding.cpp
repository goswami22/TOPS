#include <iostream>
using namespace std;

int main(){
	
	
	int a[5], i, j,temp;
	
	for(i = 0; i < 5; i++){
		cout<<"a["<<i<<"]:";
		cin>>a[i];
	}
	
	for(i = 0; i< 5; i++){
		cout<<"\na["<<i<<"]:"<<a[i];
	}
	cout"\nAccending order\n";
	for(i = 0; i < 5; i++){
		for(j = i + 1; j < 5; j++){
			if(a[i] > a[j]){
				temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}
	}
	for(i = 0; i < 5; i++){
		cout<<"\na["<<i<<"]:"<<a[i];
	}
	
	return 0;
}
