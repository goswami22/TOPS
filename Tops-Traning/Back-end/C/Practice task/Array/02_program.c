 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	int a[2][2];				// two-dimension-array
 	int i,j, sum = 0;
 	
 	for(i = 0; i < 2; i++){
 		for(j = 0; j < 2; j++){
 			printf("Enter Row: %d and Col: %d \n", i, j );
 			scanf("%d", &a[i][j]);
		 }
	 }
	 
	 for(i = 0; i < 2; i++){
	 	for(j = 0; j < 2; j++){
	 		printf("\n a[%d][%d] : %d", i, j , a[i][j]);
		 }
	 }
 	
 		for(i = 0; i < 2; i++){
 			for(j = 0; j < 2; j++){
 				sum += a[i][j];
			 }
		 }
		 
//		 for(i = 0; i < 2 ; i++){
//		 	for(j = 0; j < 2; j++){
//		 		printf("\n%d", sum);
//			 }
//		 }
 	printf("\n total sum is %d", sum);
 	
 }
