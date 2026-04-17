/*
	Write a C program that acts as a simple calculator. The program should take two numbers
	and an operator as input from the user and perform the respective operation (addition,
	subtraction, multiplication, division, or modulus) using operators.
	-> Challenge: Extend the program to handle invalid operator inputs.
*/

#include <stdio.h>
#include <conio.h>

int main(){
	
	int a, b, choose;
	
	printf("Enter your number for a:");
	scanf("%d", &a);
	
	printf("Ener your number for b:");
	scanf("%d", &b);
	
	printf("Choose your number: \n");
	printf("1. Addtion \n");
	printf("2. Substraction \n");
	printf("3. Multiplicaton \n");
	printf("4. Divition \n");
	printf("5. modulus \n");
	
	printf("Choose your number:");
	scanf("%d", &choose);
	
	switch(choose){
		case 1:
			printf("addion is %d", a + b);
			break;
		case 2:
			printf("substraction is %d", a - b);
			break;
		case 3:
			printf("multipliction is %d", a * b);
			break;
		case 4:
			printf("dvition is %d", a / b);
			break;
		case 5:
			printf("molulus is %d", a % b);
			break;
		default:
			printf("invalid number");	
	}
	
	return 0;
}
