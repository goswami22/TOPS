#include <stdio.h>
#include <conio.h>

void main(){
	
	int num[5], i, j, temp;
	
//	user number 
	for(i = 0; i < 5; i++){
		printf("Enter Your number: \n");
		scanf("%d", &num[i]);
	}
	
	
	printf("Accending order sort \n");
	
	for(i = 0; i < 5; i++){
		for(j = i + 1; j < 5; j++){
			if(num[i] > num[j]){
				temp = num[i];
				num[i] = num[j];
				num[j] = temp;
			}
		}
	}
	
	for(i = 0; i < 5; i++){
		printf("num[%d] : %d \n", i, num[i]);
	}
	
	
	printf("Desceding order sort \n");
	
	for(i = 0; i < 5; i++){
		for(j = i + 1; j < 5; j++){
			if(num[i] < num[j]){
				temp = num[i];
				num[i] = num[j];
				num[j] = temp;
			}
		}
	}
	
	for(i = 0; i < 5; i++){
		printf("num[%d] : %d \n", i , num[i]);
	}

	getch();
}
