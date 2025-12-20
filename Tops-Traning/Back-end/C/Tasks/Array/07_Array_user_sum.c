#include <stdio.h>
#include <conio.h>


void main(){
	
	int  data[6];
	int i, sum = 0;
	
	
//	user enter
	for(i = 0; i < 6; i++){
		printf("Enter number : ");
		scanf("%d", &data[i]);
	}
	
	for(i = 0; i < 6; i++){
		sum += data[i];
		printf("\n data[%d]: %d \n", i, data[i]);
	}
	

	printf("The total sum is: %d", sum);
	getch();
}
