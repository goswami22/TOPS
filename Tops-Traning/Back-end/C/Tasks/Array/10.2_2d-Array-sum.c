#include <stdio.h>
#include <conio.h>


void main(){
	
	int a[3][3],i, j, b[3][3] , sum[3][3];
	
//	For A
	printf("For A \n");
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
				printf("Enter Row : %d and col: %d \n", i , j);
				scanf("%d", &a[i][j]);
			}
		}
	
		for(i = 0; i < 3; i++){
			for(j = 0; j < 3; j++){
				printf("a[%d][%d]: %d \n", i, j, a[i][j]);
			}
		}
	
//	for B
	printf("For B \n");
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("Enter Row: %d and Col: %d \n", i, j);
			scanf("%d", &b[i][j]);
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("\n b[%d][%d] : %d", i, j, b[i][j]);
		}
	}
	
//For sum
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			sum[i][j] = a[i][j] + b[i][j];
		}
	}	
	
	for(i = 0; i < 3; i++){
		for(j = 0;j < 3; j++){
			printf("\n sum[%d][%d] : %d",i,j, sum[i][j]);
		}
	}
	
	
	getch();
}
