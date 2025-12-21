// Write a program to check whether a number is positive.

#include <stdio.h>
#include <conio.h>

int main(){
	
	int num;
	
	printf("Enter your number \n");
	scanf("%d", &num);
	
	if(num > 0 ){
		printf("your number is positive \n");
	} else if( num == 0){
		printf("your number is neutral \n");
	} 
	else {
		printf("your number is negative \n");
	}
	
	
	return 0;
}
