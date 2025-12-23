/*
	Write a C program that uses the break statement to stop printing numbers
	when it reaches 5. Modify the program to skip printing the number 3 using the
	continue statement.
*/

#include <stdio.h>
#include <conio.h>

int main(){
	
	int i;
	for(i = 0; i <= 10; i++){
		
		if(i == 3){
			continue;
		}
		
		if(i == 5){
			break;
		}
	printf("%d \n", i);
	}
	
	
	
	return 0;
}

