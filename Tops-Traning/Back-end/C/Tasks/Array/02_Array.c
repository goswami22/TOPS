/*

*/
#include <stdio.h>
#include <conio.h>

void main(){
	
	int a[5]={1,2,3,4,5};
	
	int b[6]={22,55,45,26,48,26};
	
	int c[8]= {10,5,4,2,4,4,4,9};
	
//	All Array call Same time 
	int i;
	for(i = 0; i <= 4; i++){
		printf("a[%d]: %d \n",i,a[i]);
	}
	printf("\n");
	
	for(i = 0; i < 6; i++){
		printf("b[%d]: %d \n", i, b[i]);
	}
	printf("\n");
	for(i = 0; i < 8; i++){
		printf("c[%d]: %d \n", i, c[i]);
	}
	
	
	
	getch();
}
