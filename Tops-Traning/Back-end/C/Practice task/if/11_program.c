// Check number divisible by 3 or 7.

#include <stdio.h>
#include <conio.h>

int main(){
	
	
	int num;
	printf("Enter Number: \n");
	scanf("%d", &num);
	
	if((num % 3 == 0) || (num % 7 ==0)){
        printf("Number is divisible by 3 or 7");
	} else {
		printf("Number is Not divisible by 3 or 7");

	}
	
	return 0;
}
