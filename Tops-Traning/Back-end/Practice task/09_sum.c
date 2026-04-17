//	Write a program to print the sum of two numbers.

#include <stdio.h>
#include <conio.h>

int main(){
	
	int a, b , sum;
	
	printf("enter a value: ");
	scanf("%d", &a);
	
	printf("\nenter b value: ");
	scanf("%d", &b);
	
	printf("\na = %d and b = %d", a,b);
	
	sum =  a + b;
	
	printf("\nsum is %d", sum);
	
	return 0;
}
