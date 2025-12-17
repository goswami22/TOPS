#include <stdio.h>
#include <conio.h>

int main(){
	
	printf("show number untill '5' using for loop \n");
	
	int i;
	printf("1 to 10 numbers \n");
		for(i = 1; i <= 10; i++){
			printf("%d\n", i);
	}
	
	printf("1 to 5 only \n");
		for(i = 1; i <= 10; i++){
			
		if(i <= 5){
			printf("%d \n", i);
		}
	}
	
	
	printf("6 to 10 numbers \n");
		for(i = 1; i <= 10; i++){
			
		if(i >= 6 && i <= 10){
			printf("%d \n", i);
		}
	}
	
	printf("show remaining number 1 to 3 and 8 to 10 \n");
		for(i = 1; i <= 10; i++){
			if(!(i >= 4 && i <= 7)) {
				printf("%d \n", i);
			}
	}
	
	printf("Show 2 to 3 AND  7 to 10\n");
		for(i = 1; i <= 10; i++){
		
		if((i >= 2 && i <= 3) || (i >= 7 && i <= 10)){
			printf("%d \n", i);
		}
	}
	
	printf("show 2 to 5 AND 7 TO 9");
	for(i = 1; i <= 10; i++ ){
		
		if((i >= 2 && i <= 5) || (i >= 7 && i <= 9)){
			printf("%d \n", i);
		}
	}
	
	printf("Show 1 to 8 \n");
	for(i = 1; i <= 10; i++){
		if(i <= 8) {
			printf("%d \n", i);
		} 
	}
	printf("show 3 to 5 AND 8 to 12 AND 14 TO 18 \n");
	for(i = 1; i <= 20;i++){
		if((i >= 3 && i <= 5) || (i >= 8 && i <= 12) || (i >= 14 && i <= 18)){
			printf("%d \n", i);
		}
	}
	
	printf("show 2 to 7 \n");
	for(i = 1; i <= 10; i++){
		if(i >= 2 && i <= 7){
			printf("%d \n", i);
		}
	}
	
	printf("show 10 to 1 \n");
	for(i = 10; i >= 1; i--){
		printf("%d \n", i);
	}
	

	return 0;
}
