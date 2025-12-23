/*
	Write a C program that accepts two integers from the user and performs
arithmetic, relational, and logical operations on them. Display the results
*/

#include <stdio.h>
#include <conio.h>
int main(){
	
	int a, b, sum;
	
	printf("Enter a value : \n");
	scanf("%d", &a);
	
	
	printf("Enter b value : \n");
	scanf("%d", &b);
//	arithmetic operater 
	sum = a + b;
	printf("The sum is %d", sum);
// relation ope
	if(a == b){
		printf("\nThe value are same");
	} else {
		printf("\nThe value are not same");
	}

//	logocal ope
	
	printf( (a == b) ? "\nTrue": "\nFlase");


}
