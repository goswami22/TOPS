#include <stdio.h>
#include <conio.h>

int main(){
	int r,c,s;
	
//	row
	for(r = 1; r <= 5; r++){
//	space 
	for(s = 1; s <= 5 - r; s++){
		printf("");
	}	
//	column
		for(c = 1; c <= r; c++){
			printf("* ");
		}	
	printf("\n");	
	}
	
	return 0;
}
