/*
	- Write a C program that accepts two 2x2 matrices from the user and adds them. Display the
		resultant matrix.
	- Challenge: Extend the program to work with 3x3 matrices and matrix multiplication.
*/

#include <stdio.h>
#include <conio.h>

int main(){
	int a[2][2],b[2][2],c[2][2],i,j;
	
	printf("For A \n");
	for(i = 0;i < 2; i++){
		for(j = 0; j< 2; j++){
			printf("Enter Row: %d and Col: %d \n", i, j);
			scanf("%d", &a[i][j]);
		}
	}
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("a[%d][%d] : %d \n", i , j , a[i][j]);
		}
	}
	
	printf("For B \n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("Enter Row: %d and Col: %d", i,j);
			scanf("%d", &b[i][j]);
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0;j < 2; j++){
			printf("b[%d][%d]: %d \n", i, j , b[i][j]);
		}
	}
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			c[i][j] = a[i][j] + b[i][j]; 
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("The sum is %d\n", c[i][j]);
		}
	}
	
	
	return 0;
}
