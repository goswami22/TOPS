 /*
 	Write a C program that takes three numbers from the user and determines:
		o The largest number.
		o The smallest number.
	Challenge: Solve the problem using both if-else and switch-case statements
 */
 
 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	int a, b, c;
 	int largest, smallest;
 	printf("Enter a value:\n");
 	scanf("%d", &a);
 	
 	printf("Enter b value:\n");
 	scanf("%d", &b);
 	
 	printf("Enter c value:\n");
 	scanf("%d", &c);
 	

	printf("Largest Number \n");
	if(a > b && a > c){
		printf("A is Largest Numbar \n");
	} else if( b > a && b > c){
		printf("B is Largest Numbar \n");
	} else {
		printf("C is Largest Numbar \n");
	}

	printf("Smallest Number \n");
	if(a < b && a < c){
		printf("A is Smallest Numbar \n");
	} else if( b < a && b < c){
		printf("B is Smallest Numbar \n");
	} else {
		printf("C is Smallest Numbar \n");
	}
	
//	For largest
    if (a > b && a > c){
        largest = 1;
        
    } else if (b > a && b > c) {
        largest = 2;
    } else{
        largest = 3;
	}

	switch(largest){
		case 1:
			printf("A is Largest Numbar \n");
			break;
		
		case 2:
			printf("B is Largest Numbar \n");
			break;	
		
		case 3:
			printf("C is Largest Numbar \n");
			break;	
	}
 	
// 	For smallest

	if(a < b && a < c){
		smallest = 1;
	} else if (b < a && b < c){
		smallest = 2; 
	} else {
		smallest = 3;
	}
	switch(smallest) {
		case 1: 
			printf("A is Smallest Number");
			break;
		case 2: 
			printf("B is Smallest Number");
			break;
		case 3:
			printf("C is Smallest Number");
			break;	
	}
 	
 	
 	return 0;
 }
