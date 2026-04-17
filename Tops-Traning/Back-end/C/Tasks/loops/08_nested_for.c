#include <stdio.h>
#include <conio.h>

int main(){
	
	int r, c;
	
	
	printf("Show 5 row AND 5 col \n");
	for(r = 1; r <= 5; r++){
		
		for(c = 1; c <= 5; c++){
			printf(" * ");
		}
		
		printf("\n");
	}	
	
	
	return 0;
}
