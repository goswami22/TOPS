#include <stdio.h>
#include <conio.h>

int main(){
	int r,c,s;
	
//	row
	for(r = 0; r <= 5; r++){
//	space 
	for(s = 0; s < 2 * r ; s++){
		printf(" ");
	}
//	column
		for(c = 0; c <5- r; c++){
			printf("* ");
		}	
	printf("\n");	
	}
	
	return 0;
}
