#include <stdio.h>
#include <conio.h>

int main(){
	int num;
	
	printf("Enter day of number \n");
	scanf("%d", &num);
	
	switch(num){
		case 1: 
			printf("Today is Monday");
			break;
		
		case 2:
			printf("Today is Tuesday");
			break;
		
		case 3:
			printf("Today is Wednesday");
			break;
		
		case 4:
			printf("Today is Thursday");
			break;
			
		case 5:
			printf("Today is Friday");
			break;
		
		case 6:
			printf("Today is Saturday");
			break;
			
		case 7: 
			printf("Today is Sauday");
			break;
			
		default:
			printf("Invalid Number");				
	}
	
	
	return 0;
}
