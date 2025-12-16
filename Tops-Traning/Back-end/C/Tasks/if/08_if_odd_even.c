#include <stdio.h>
#include <conio.h>

int main(){
	
	int num;
	printf("Enter Number here: \n");
	scanf("%d", &num);
	
	if(num % 2 == 0){
		printf("This is Even number \n");
	} else {
		printf("This is Odd number \n");
	}
	
	
	return 0;
}


