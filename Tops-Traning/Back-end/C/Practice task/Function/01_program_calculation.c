// function Calculation
// without argument and without return value.
#include <stdio.h>
#include <conio.h>
 
 void cal(){
 	int a, b ,sum,sub,multi,div,mod,in,de;
 	
 	printf("\nEnter a number:");
 	scanf("%d", &a);
 	
	printf("\nEnter b number:");
 	scanf("%d", &b); 
	 
	sum = a + b;
	printf("\nSum is : %d", sum); 	
	
	sub = a - b;
	printf("\nSub is : %d", sub); 	
	
	multi = a * b;
	printf("\nMultipication is : %d", multi); 	
	
	div = a / b;
	printf("\nDivision is : %d", div); 	
	
	mod = a % b;
	printf("\nmod is : %d", mod); 	
	
	in = a++;
	printf("\nIncreament of a is : %d", a); 	
	
	de= b--;
	printf("\ndecrement is : %d", de); 	
	printf("\ndecrement result is %d", b);
	
	
	getch();
 	
 }
 
 
 int main(){
 	cal();
 	
 	
 	
 	return 0;
 }
