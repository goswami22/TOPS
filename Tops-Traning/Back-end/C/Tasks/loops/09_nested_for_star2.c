/*
	1
	1 2
	1 2 3
	1 2 3 4
	1 2 3 4 5

*/


#include <stdio.h>
#include <conio.h>

int main(){
	
	
	int r, c;
	
	printf("With Number \n");
	for(r = 1; r <= 5; r++){
		for(c = 1; c <= r; c++){
			printf("%d ", c);
		}
		printf(" \n");
	}
	

	return 0;
}

