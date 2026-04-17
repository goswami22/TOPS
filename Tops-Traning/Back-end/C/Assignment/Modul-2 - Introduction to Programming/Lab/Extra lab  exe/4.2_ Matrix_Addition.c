/*
	- Write a C program that accepts two 2x2 matrices from the user and adds them. Display the
		resultant matrix.
	- Challenge: Extend the program to work with 3x3 matrices and matrix multiplication.
*/

#include <stdio.h>
#include <conio.h>

int main(){
	int a[2][2],b[2][2],c[2][2],i,j;
	int d[3][3],e[3][3],f[3][3];
	
	printf("For A 2x2 \n");
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
	
	printf("For B 2x2 \n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("Enter Row: %d and Col: %d\n", i,j);
			scanf("%d", &b[i][j]);
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0;j < 2; j++){
			printf("b[%d][%d]: %d \n", i, j , b[i][j]);
		}
	}
//	for sum
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
//	3x3 matrices and matrix multiplication.

//	for d
	printf("For d 3x3\n");
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3;j++){
			printf("Enter Row: %d and Col: %d\n", i, j);
			scanf("%d",&d[i][j]);
		}
	}

	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("d[%d][%d] : %d\n", i, j, d[i][j]);
		}
	}
//	for e
	printf("For e 3x3\n");	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3;j++){
			printf("Enter Row: %d and Col: %d\n", i, j);
			scanf("%d",&e[i][j]);
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("e[%d][%d] : %d\n", i, j, e[i][j]);
		}
	}
//	Multiplication
	for(i = 0; i < 3; i++){
		for(j = 0; j <3; j++){
			f[i][j]= d[i][j] * e[i][j];
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j <3; j++){
			printf("The multiplication is %d\n", f[i][j]);
		}
	}
	
	
	return 0;
}
