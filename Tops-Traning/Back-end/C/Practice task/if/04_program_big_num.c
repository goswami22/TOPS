// Find the biggest number among three numbers using if condition.

#include <stdio.h>
#include <conio.h>

int main(){
	 int num1, num2, num3;
	 
	 printf("Enter number 1:");
	 scanf("%d", &num1);
	 
	 printf("Enter number 2:");
	 scanf("%d", &num2);
	 
	 printf("Enter number 3:");
	 scanf("%d", &num3);
	
	if(num1 >= num2 && num1 >= num3){
		printf("\nNumber 1 grater number");
	} else if( num2 >= num1 && num2 >= num3){
		printf("\nNumber 2 grater number");
	} else if(num3 >= num1 && num3 >= num2){
		printf("\nNumber 3 grater number");
	}
	
	return 0;
}
