#include <stdio.h>
#include <conio.h>
/* 

* * * * *
* * * *
* * *
* *
*

*/




int main(){
	
	int r,c,s;
//row
	for(r = 5; r >= 1; r--){
// column
		for(c = 1; c <= r; c++){
			printf("* ");
		}
		printf("\n");
		
	}
	
	return 0;
}
