// print - 1 t0 10 num 

#include <stdio.h>
#include <conio.h>

int main(){
	
	int i, range;
	
	printf("Enter range number");
	scanf("%d", &range);
	
	printf("for loop\n");
	for(i = 1; i <= range; i++){
		printf("%d\n", i);	
	}
	
	
	printf("while loop\n");
	i = 1;
	while(i <= range){
		printf("%d\n", i);	
		i++;
	}
	
	printf("do while loop\n");
	
	
	i = 1;
	do{
		printf("%d\n", i);	
		i++;
	}while(i <= range);
	
	
	return 0;
}





