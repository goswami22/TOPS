/*
	Write a C program that calculates the factorial of a given number using a function.
	- Challenge: Implement both an iterative and a recursive version of the factorial function and
		compare their performance for large numbers.
*/


 
#include <stdio.h>
#include <conio.h>
 int factNum(int n){
 	
 	int i;
 	int fact = 1;
 	
 	for(i = 1; i <= n; i++){
 		fact*= i;
	 }
	 
	 return fact;
 }
 
 
 int main(){
 	
 	int n;
 	
 	printf("Enter Number: \n");
 	scanf("%d", &n);
 	
 	printf("Factrial number is %d",factNum(n));
 	
 	
 	return 0;
 }
