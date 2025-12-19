/*
	Find prime number 
	
*/

#include <stdio.h>
#include <conio.h>

int primNum(int n){
	int i, count = 0;
	
	
		
	for(i = 1; i <= n; i++){
		if( n % i == 0 ){
			count++;
		}
	}
	return 0;
}

if(pnum == 2){
	printf("prime number ");
} else 
{
	printf("Not prime number ");
}


void main(){
	
	int num;
	printf("Enter Your Number: \n");
	scanf("%d", &num);
	
	printf("Your number: %d \n", num);
	printf("%d \n", primNum(num));
	
	getch();
}
