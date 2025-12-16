#include <stdio.h>
#include <conio.h>

int main(){
	
	
	int e;
	
	printf("Even number \n");
	for(e = 1;e <= 10; e++) {
		
		if(e % 2 == 0 ){
			printf("\n  %d", e);
		}

	}
	printf("\n Odd Number \n");
	
	int o;
	
	for(o = 1; o <= 10; o++){
		if(!(o % 2 == 0)){
			printf("\n %d", o);
		}
	}
	
	
	
//	printf("\n number %d", i);
	return 0;
}
