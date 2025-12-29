  /*
  Write a C program that takes an integer input from the user and prints its multiplication
table using a for loop.
? Challenge: Allow the user to input the range of the multiplication table (e.g., from 1 to N).
  */
  
#include <stdio.h>
#include <conio.h>

int main(){
	
	int i, n, num;
	printf("Enter your value: ");
	scanf("%d", &num);
	
	printf("Enter your range");
	scanf("%d", &n);
	
	for(i = 1; i <= n; i++){
		printf("%d X %d = %d \n", num , i, num * i);
	}
	
	
	return 0;
}  
