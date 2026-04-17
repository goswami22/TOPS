//  Write a program to check whether a number is odd or even.


#include <stdio.h>
#include <conio.h>

int main(){
	
	int num;
	
	printf("Enter your number: ");
	scanf("%d", &num);
	
	if( num % 2 == 0 ){
		printf("\n This is even number");
	} else {
		printf("\n This is odd number");
	}
	
	
	return 0;
}
