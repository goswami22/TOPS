#include <stdio.h>
#include <conio.h>


void main(){
	
	
	int data[5], i;
	
//	take input form user
	
	for(i = 0; i < 5; i++){
		printf("Enter Array here: \n");
		scanf("%d", &data[i]);	
	}
	
	for(i = 0; i < 5; i++){
		printf("\n data[%d] : %d", i , data[i]);
	}
	
	
	getch();
}
