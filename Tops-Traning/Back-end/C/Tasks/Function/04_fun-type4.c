/*
	witout arrgument and with return value
	syntex:
	 
	int data(){
		return data; 
	}	
*/


#include <stdio.h>
#include <conio.h>

int data(){
	return 20;
}
void main(){
	
	
	printf("The value is: %d", data());
	getch();
}
