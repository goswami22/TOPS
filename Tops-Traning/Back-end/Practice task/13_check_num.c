// 	Write a program to check positive, negative, or zero.

#include <stdio.h>
#include <conio.h>

int main(){
	int num;
	
	printf("Enter number: \n");
	scanf("%d", &num);
	
	if(num > 0){
		printf("Number is positive\n");
	} else if(num < 0){
		printf("Number is negative\n");
	} else if (num == 0){
		printf("Number is equal to zero\n");
	}
	
	return 0;
}
