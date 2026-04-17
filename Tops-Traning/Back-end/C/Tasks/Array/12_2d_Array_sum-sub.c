//		Two diamension array


 #include<stdio.h>
 #include<conio.h>
 
 int main(){
 	
 	int a[3][3], b[3][3],sum[3][3],sub[3][3];
 	int i, j;
 	
 	
 	printf("For A \n");
 	for(i = 0; i < 3; i++){
 		for(j = 0; j < 3; j++){
 			printf("Enter Row: %d and Col: %d\n", i, j);
 			scanf("%d", &a[i][j]);
		 }
	 }
 	
	 for(i = 0; i < 3; i++){
	 	for(j = 0; j < 3; j++){
	 		printf("a[%d][%d]: %d\n", i, j, a[i][j]);
		 }
	 }	
 	printf("For B \n");
 	for(i = 0; i < 3; i++){
 		for(j = 0; j < 3; j++){
 			printf("Enter Row: %d and Col: %d \n", i, j);
 			scanf("%d", &b[i][j]);
		 }
	 }
	 
	 for(i = 0; i < 3; i++){
	 	for(j = 0; j < 3; j++){
	 		printf("b[%d][%d]: %d\n", i,j, b[i][j]);
		 }
	 }
	 
//	 for sum
	for(i = 0; i < 3; i++){
	 	for(j = 0; j < 3; j++){
	 	sum[i][j] = a[i][j] + b[i][j];
		}
	}	
 	
 	for(i = 0; i < 3; i++){
	 	for(j = 0; j < 3; j++){
			printf("\nSum is %d", sum[i][j]);
	 	}
 	}	
 	
// 	for sub 

	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			sub[i][j] = a[i][j] - b[i][j];
		}
	}
	
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("\nsubstractin is %d", sub[i][j]);
		}
	}




 }
