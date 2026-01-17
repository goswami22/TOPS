/*
Write a C program to check if a number is even or odd using an if-else
statement.
Extend the program using a switch statement to display the month
name based on the user’s input (1 for January, 2 for February, etc.).

*/

#include <stdio.h>
#include <conio.h>

int main(){
	
	int i, choice; 
	printf("Enter your number: \n");
	scanf("%d",&i);
	
	if(i % 2 == 0){
		printf("This is Even number \n");
	} else {
		printf("This is odd number \n");
	}
	
	printf("Choose Month number: \n");
	scanf("%d", &choice);
	
	switch(choice){
		case 1: 
			printf("January\n");
			break;
		
		case 2: 
			printf("Fabuary \n");
			break;
			
		case 3: 
			printf("March\n");
			break;
		
		case 4: 
			printf("April\n");
			break;
		
		case 5:
			printf("May\n");
			break;
			
		case 6: 
			printf("june\n");
			break;
		
		case 7:
			printf("July \n");
			break;
		
		case 8:
			printf("August \n");
			break;
			
		case 9:
			printf("September \n");
			break;
		
		case 10:
			printf("October \n");
			break;
		
		case 11:
			printf("November \n");
			break;
		
		case 12:
			printf("December \n");
			break;
			
		default:
			printf("Enter Valid number.");
				
		
	}
	
	
	return 0;
}
