// Write to find the average of three numbers entered by the user using if condition.


#include <stdio.h>
#include <conio.h>

int main(){
	int num1, num2,num3, avg;
	
	printf("Enter first number: ");
	scanf("%d", &num1);
	
	printf("Enter second number: ");
	scanf("%d", &num2);
	
	printf("Enter third number: ");
	scanf("%d", &num3);
	
	avg = (num1 + num2 + num3) / 3;
	printf("The avg num is: %d", avg);
	
	
	if(avg >= 50 ) {
		printf("\nAverage numner is good.");
	} else {
		printf("\nAverage numner is poor.");
	}
}
