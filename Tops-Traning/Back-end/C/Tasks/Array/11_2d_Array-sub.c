#include <stdio.h>
#include <conio.h>

int main(){
	
	int a[3][3], b[3][3], i ,j, sub[3][3];
	printf("For a \n");
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("Enter Row: %d and col: %d \n", i, j);
			scanf("%d", &a[i][j]);
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("\na[%d][%d] : %d", i, j, a[i][j]);
		}
	}
	
	printf("\n For b \n");
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("Enter Row: %d and col: %d  \n", i , j);
			scanf("%d", &b[i][j]);
		}
	}
	
		for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("\n b[%d][%d] : %d", i, j, b[i][j]);
		}
	}
	
//	substraction
	printf("\n Substraction \n");
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			sub[i][j] = a[i][j] - b[i][j];
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("\n sub[%d][%d] : %d", i,j,sub[i][j]);
		}
	}
	
	
	return 0;
}
