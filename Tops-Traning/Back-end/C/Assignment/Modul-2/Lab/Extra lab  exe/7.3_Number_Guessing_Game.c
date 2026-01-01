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
 	
 	
 	
 	for(i = 1; i <= 5; i++){
 	printf("Enter number between 1 to 100\n");
 	scanf("%d", &num);
 	
 	if(num > onum){
 		printf("choose larger number, to high\n");
 		
	  } else if(num < onum){
	  	printf("choose smaller number,to low\n");
	  	
	  } else if(num == onum) {
	  	printf("You right\n");
	  	break;
	  } 		 
	}
 	
 	return 0;
 }
