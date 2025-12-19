/*
	2. with argument and with return value 
	
	syntex:
	int functionname(int a, int b) {
		code...
	}
	
	functionname(10, 20);
	
*/

#include <stdio.h>
#include <conio.h>

int sum(int a, int b){
	
	int sumdata;
	sumdata = a + b;
	return sumdata;
	
}

int main(){
	
	int x = sum(10, 20);
	
	printf("sum: %d \n", x );	
	printf("sum: %d \n", sum(50,20));
	printf("sum: %d \n", sum(100, 110));
	return 0;
}

