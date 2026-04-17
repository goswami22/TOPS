#include <stdio.h>
#include <conio.h>


void main(){
	
	int  data[6] = {1,2,3,4,5,6};
	int i, sum = 0;
	
	for(i = 0; i < 6; i++){
		sum += data[i];
		printf("\n data[%d]: %d \n",i, data[i]);
	}
	

	printf("The total sum is: %d", sum);
	getch();
}
