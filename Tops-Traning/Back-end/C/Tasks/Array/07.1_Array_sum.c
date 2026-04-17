#include <stdio.h>
#include <conio.h>

void main(){
	
	int num[6]= {1,2,3,4,5,6};
	int i, sum = 0;
	
	for(i = 0; i < 6; i++){
		sum += num[i];
		printf("num[%d] : %d \n", i, num[i]);
	}
	
	
	printf("Sum: %d", sum);
	
	
	getch();
}
