/*
	with arrgument and without return value 
	
	syntex:
	void functionname(){
		code ...
	}
	
	functionname();					// call function
	
*/


#include <stdio.h>
#include <conio.h>

void sub(int a, int b){
	int subdata;
	subdata = a - b;
	
	printf("subdata: %d \n",subdata);
	
}


int main(){
	
	sub(10, 20);
	sub(15, 5);
	return 0;
}
