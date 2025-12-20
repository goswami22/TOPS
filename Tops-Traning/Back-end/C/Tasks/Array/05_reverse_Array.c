#include <stdio.h>
#include <conio.h>

void main(){
	
	
	int num[6], i;
	
	
//	take numbe form user
	for(i = 0; i < 6; i++){
		printf("Enter your number here: \n");
		scanf("%d", &num[i]);
	}
	
	for(i = 5; i >= 0; i--){
		printf("num[%d] : %d \n", i ,num[i]);
	}
	
	
	
	getch();
}
