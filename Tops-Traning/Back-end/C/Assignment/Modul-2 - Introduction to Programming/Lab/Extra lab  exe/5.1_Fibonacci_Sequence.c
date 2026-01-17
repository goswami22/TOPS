/*
	Write a C program that generates the Fibonacci sequence up to N terms using a recursive
	function.
	- Challenge: Modify the program to calculate the Nth Fibonacci number using both iterative
	and recursive methods. Compare their efficiency.

*/


#include <stdio.h>
#include <conio.h>

void fibNum(int num){
	int i, a = 0, b = 1, c;
	
	for(i = 0; i < num; i++){
		printf("%d\n", a);
		 c = a + b;
		 a = b;
		 b = c;
		}
}



int main(){
	
	int num;
	printf("Enter number \n");
	scanf("%d", &num);
	
	printf("Fibonacci series is\n");
	fibNum(num);
	
	return 0;
}
	
