/*
	without arrgument and without return value  
		- In this function Type We use void()
		
		syntex: 
		int/void functionName(){
			Code ...
		}	
*/


#include <stdio.h>
#include <conio.h>

void hello(){
	printf("Hello Friends! \n");
}


void star(){
	
	int i;
	for(i = 1; i <= 5; i++){
		printf("%d \n", i);
	}
	
	
	getch();
}



void main(){
	
	
	hello();
	star();
	
	star();
	
	getch();
}





