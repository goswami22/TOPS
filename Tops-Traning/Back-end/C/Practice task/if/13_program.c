/*
	Write a C program that takes three numbers from the user and determines:
	o The largest number.
	o The smallest number.
	? Challenge: Solve the problem using both if-else and switch-case statements
*/

#include <stdio.h>
#include <conio.h>

int main(){
	
	int a, b, c, lnum;
	
	printf("Enter a value: \n");
	scanf("%d", &a);
	
	printf("Enter b value: \n");
	scanf("%d", &b);
	
	printf("Enter c value: \n");
	scanf("%d", &c);
	
//	if(a > b && a > c){
//		printf("A is largest number");
//	} else if (b > a && b > c){
//		printf("B is largest number");
//	} else {
//		printf("C is largest number");
//	}


	if(a > b && a > c){
		lnum = 1;
	} else if(b > a && b > c){
		lnum = 2;
	} else if (c > a && c > b){
		lnum = 3;
	}
	
	switch(lnum){
		case 1:
			printf("A is largest number");
		break;
		
		case 2:
			printf("B is largest number");
		break;	
			
		case 3:
			printf("C is largest number");	
		break;
		
		default:
			printf("Invalid number");
		}
			
	
	
	return 0;
}
