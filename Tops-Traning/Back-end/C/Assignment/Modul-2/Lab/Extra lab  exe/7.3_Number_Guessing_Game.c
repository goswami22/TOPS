/*
	Write a C program that implements a simple number guessing game. The program should
	generate a random number between 1 and 100, and the user should guess the number
	within a limited number of attempts.
	- Challenge: Provide hints to the user if the guessed number is too high or too low
*/


#include <stdio.h>
#include <conio.h>
 
 int main(){
 	
 	int i, num , onum= 30;
 	
 	
 	printf("Enter number between 1 to 100\n");
 	
 	for(i = 1; i <= 5; i++){
 	printf("Guess Number \n");
 	scanf("%d", &num);
 	
 	if(num == onum){
 		printf("Right Guess\n");
 		break;
	  } else if(num < onum){
	  	printf("To low, try again\n");
	  	
	  } else if(num > onum) {
	  	printf("To hight, Try again\n");
	  	
	  } 		 
	}
 	
 	return 0;
 }
