#include <stdio.h>
#include <conio.h>

void main(){
	
	
	
	int num1, num2, data;
	printf("Enter Number 1 here: \n");
	scanf("%d", &num1);
	
	
	printf("Enter Number 2 here: \n");
	scanf("%d", &num2);
	
	printf("\n 1. Addition");
	printf("\n 2. Substaction");
	printf("\n 3. Multiplication");
	printf("\n 4. Division");
	printf("\n please select one\n");
	scanf("%d",&data);
	
	switch(data){
		case 1: 
			printf("The addtion is %d", num1 + num2);
			break;
		
		case 2: 
			printf("The substraction is %d", num1 - num2);
			break;
			
		case 3: 
			printf("The Multiplication is %d", num1 * num2);
			break;
		
		case 4: 
			printf("The Divition is %d", num1 / num2);
			break;
		
		default:
			printf("invalid Number");
	}
	
	getch();
}
