/* Matrix Addition
	Write a C++ program to perform matrix addition on two 2x2 matrices.
	- Objective: Practice multi-dimensional arrays.
*/


#include <iostream>
using namespace std;

int main(){
 	int a[2][2],b[2][2],c[2][2] ,i , j;
	
//	for a
cout<< "For a"<< endl;
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++) {
			cout << "a["<<i<<"][" << j << "]"<< endl;
			cin >> a[i][j];
		}
	}
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++) {
			cout << "a["<<i<<"]["<<j<<"]" << a[i][j] << endl ;
		}
	}
//	for b
cout<< "For b"<< endl;	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			cout << "b["<< i << "][" << j << "]" << endl;
			cin>>b[i][j];
		}
	}
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++) {
			cout << "b["<<i<<"]["<<j<<"]" << b[i][j] << endl;
		}
	}
	
	//	for sum
cout<< "For Sum"<< endl;
	for(i = 0; i < 2; i++){
		for (j = 0; j < 2; j++){
			c[i][j] = a[i][j] + b[i][j];
			cout << "c["<<i<<"]["<<j<<"]:"<< c[i][j] << endl;
		}
		
	}
	
	
	
	
	return 0;
}
