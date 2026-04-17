#include <stdio.h>
#include <conio.h>

int main(){
	int r,c,s;
	
//	row
	for(r = 0; r <= 6; r++){

//		space loop
		for(s = 0; c <= 6 - r; c++){
			printf(" ");
		}
		
//		column loop
		for(c = 1; c <= r; c++){
			printf("* ");
		}
		printf("\n");
	}
	
	return 0;
}
