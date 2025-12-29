 /*
 	Write a C program that stores 5 integers in a one-dimensional array and prints
	them. 
	Extend this to handle a two-dimensional array (3x3 matrix) and
	calculate the sum of all elements
 
 */
 
 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	int num[5], num2[3][3];
 	int  i,j,sum = 0;
 	for(i = 0; i < 5; i++){
 		printf("Enter num[%d] \n", i, num[i]);
 		scanf("%d", &num[i]);
	 }
 	
 	for(i = 0; i < 5; i++){
 		printf("%d \n", num[i]);
	 }
	 
//	 two dimensional array

	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("num2[%d][%d] \n", i, j);
			scanf("%d", &num2[i][j]);
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			sum += num2[i][j];
		}
	}
	
	printf("The sum is %d", sum);
	
 	return 0;
 }
 
