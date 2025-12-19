#include <stdio.h>
#include <conio.h>

void main(){
	
	
	
	float num1, num2;
	char  data;
	printf("Enter Number 1 here: \n");
	scanf("%f", &num1);
	
	
	printf("Enter Number 2 here: \n");
	scanf("%f", &num2);
	
	printf("\n a. Addition");
	printf("\n b. Substaction");
	printf("\n c. Multiplication");
	printf("\n d. Division");
	printf("\n please select one \n");
	scanf(" %c",&data);
	
	
	switch(data){
		case 'a': 
			printf("The addtion is %f", num1 + num2);
			break;
		
		case 'b': 
			printf("The substraction is %f", num1 - num2);
			break;
			
		case 'c': 
			printf("The Multiplication is %f", num1 * num2);
			break;
		
		case 'd': 
			printf("The Divition is %f", num1 / num2);
			break;
		
		default:
			printf("invalid Number");
	}
	
	getch();
}
