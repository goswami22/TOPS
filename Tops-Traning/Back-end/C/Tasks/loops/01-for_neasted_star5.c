#include <stdio.h>
#include <conio.h>

int main(){
	int r,c,s;
	
// row
	for(r = 1; r <= 5; r++){

		for(s = 5; s >= 4 - r; s--){
			printf(" ");
		}
		for(c = 5; c >= r; c--){
			printf("* ");
		}
		printf("\n");
	}
	
	return 0;
}
