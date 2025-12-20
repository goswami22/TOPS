#include <stdio.h>
#include <conio.h>


int main(){
	
	int a[2][2], b[2][2], i, j, sum[2][2];
	
	printf("For a \n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("Enter row: %d and col: %d \n", i,j);
			scanf("%d", &a[i][j]);
		}
	}
	
	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("\n a[%d][%d] :%d \n",i,j,a[i][j]);
		}	
	}
//	for b
	printf("For b \n");
	printf("\n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("Enter row : %d and Col: %d \n", i, j);
			scanf("%d", &b[i][j]);
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("\n b[%d][%d] %d \n", i, j, b[i][j]);
		}
	}
	
//	for Sum

	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			sum[i][j] = a[i][j] + b[i][j];
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0; j< 2; j++){
			printf("sum[%d][%d] : %d \n", i, j, sum[i][j]);
		}
	}
	
	
	return 0;
}
