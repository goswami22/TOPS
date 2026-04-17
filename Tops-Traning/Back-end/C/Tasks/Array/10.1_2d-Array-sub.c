#include <stdio.h>
#include <conio.h>

int main(){

	int a[2][2], b[2][2], sub[2][2] , i , j;
	
	printf("For A \n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("Enter Row: %d and col: %d \n", i, j);
			scanf("%d", &a[i][j]);
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("\n a[%d][%d] : %d", i , j ,a[i][j]);
		}
	}

	printf("\n Form B \n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("Enter Row: %d and col : %d \n", i, j);
			scanf("%d", &b[i][j]);
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("\n b[%d][%d] : %d", i, j, b[i][j]);
		}
	}


	printf("\n For  Substraction");
	for(i = 0; i < 2; i++){
		for(j = 0; j< 2; j++){
			sub[i][j] = a[i][j] - b[i][j];
		}
	}
	
	for(i = 0; i < 2; i++){
		for(j = 0; j < 2; j++){
			printf("\n sub[%d][%d] : %d", i, j, sub[i][j]);
		}
	}
	

 return 0;	
}
