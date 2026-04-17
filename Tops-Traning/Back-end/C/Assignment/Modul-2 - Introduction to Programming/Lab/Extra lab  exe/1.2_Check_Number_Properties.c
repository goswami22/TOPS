/*
	Write a C program that takes an integer from the user and checks the following using
	different operators:
	o Whether the number is even or odd.
	o Whether the number is positive, negative, or zero.
	o Whether the number is a multiple of both 3 and 5.

*/

#include <stdio.h>
#include <conio.h>

int main(){
	
	int a,b;
	
	printf("Enter a value:\n");
	scanf("%d", &a);
	
	printf("Enter b value:\n");
	scanf("%d", &b);
	printf("even or odd number checker \n.");
	if(a % 2 == 0){
		printf("The value is even\n");
	} else {
		printf("The value is odd\n");
	}
	
	printf("positive, negative, or zero number checker. \n");
	if(a == 0 ){
		printf("The numer is zero\n");
	} else if(a > 0){
		printf("The numer is positive\n");
	} else if(a < 0) {
		printf("The numer is negative\n");
	}
	
	printf("Whether the number is a multiple of both 3 and 5. \n");
	if(a % 3 == 0 && a % 5 == 0){
		printf("Yes, number is multiply by both.\n");
	} else {
		printf("No, number is multiply by both.\n");
	}
	
	
	return 0;
}
