/*


*
* *
* * *
* * * *
* * * * *

*/


#include <stdio.h>
#include <conio.h>


int main(){
	
	
	int r , c;

	printf("with star pattern form right side \n");
	for(r = 1; r <= 5; r++){
		for(c = 1; c <= r; c++){
			printf("* ");
		}
		printf("\n");
	}

	return 0;
}
