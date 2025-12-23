/*
	Write a C program that calculates the factorial of a number using a function.
	Include function declaration, definition, and call.
*/

#include <stdio.h>
#include <conio.h>


int factNum(int n){
int i, fact = 1;

	for(i = 1; i <= n; i++){
		fact *= i;	
	}
	return fact;
}

void main(){
	int num;
	printf("Enter your number \n");
	scanf("%d", &num);
	
	printf("The factorial number is %d", factNum(num));
	
}
