//	Write a program to check even or odd.
#include <stdio.h>
#include <conio.h>

int main(){
	
	int num;
	
	printf("Enter Number : \n");
	scanf("%d", &num);
	
	
	if(num % 2 == 0){
		printf("Number is even\n");
	} else {
		printf("Number is odd\n");
	}	 
	
	return 0;
}
