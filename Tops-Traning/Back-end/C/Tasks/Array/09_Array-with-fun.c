#include <stdio.h>
#include <conio.h>


int sumNum(int n){
	
	int i, sum = 0, num[5];
	
	
	for(i = 0; i < 5; i++){
		printf("Enter your number: \n");
		scanf("%d", &num[i]);
		
		sum += num[i];	
	}
	
	for(i = 0; i < 5; i++){
		printf("num[%d] : %d \n", i, num[i]);
	}
	
	return sum;
}



void main(){
	int sum;
	
	printf("Total sum is %d", sumNum(sum));
	getch();
}
