/*
	Find Factorual number 

*/

#include <stdio.h>
#include <conio.h>
int factNum(int n){
	int i, factnum = 1;
	for(i = 1; i <= n; i++){
		factnum = factnum * i;
	}
	return factnum;
}

void main(){
	
 int num;
 printf("Enter your value:\n");
 scanf("%d", &num);
 
 printf("Your input number: %d\n", num);
 printf("your factorial number is %d \n", factNum(num)); 
 
 
 getch();
	
}
