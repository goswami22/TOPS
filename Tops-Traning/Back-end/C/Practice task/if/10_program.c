//	 Check number is between 10 and 50.

#include <stdio.h>
#include <conio.h>


int main(){
	
	int num;
	 
	printf("Enter 10 To 50 number\n");
	scanf("%d", &num);
	
	
	if((num >= 10) && (num <= 50)){
		printf("Number is in 10 to 50 number \n");
	} else {
		printf("Number is  out of 10 to 50 number \n");
	}
	
	
	return 0;
}

