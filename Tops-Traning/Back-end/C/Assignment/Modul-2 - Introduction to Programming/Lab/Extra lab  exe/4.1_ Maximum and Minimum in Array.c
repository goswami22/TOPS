/*
	 Write a C program that accepts 10 integers from the user and stores them in an array. The
	program should then find and print the maximum and minimum values in the array.
	? Challenge: Extend the program to sort the array in ascending order
*/

#include <stdio.h>
#include <conio.h>

int main(){
	int a[10], i,j, temp;
	int max,min;
	
	
	for(i = 0; i < 10; i++){		
		printf("Enter Row: %d \n",i);
		scanf("%d", &a[i]);
	}
	
//	for accending order
	for(i = 0; i < 10; i++){
		for(j = 0; j < 10; j++){
			if(a[i] > a[j]){
				temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}
	}
	
	for(i = 0; i < 10; i++){
		printf("a[%d]: %d\n",i, a[i]);
	}
	
	
//	max and min
	for(i = 0; i < 10; i++){
		if(a[i] > max){
			max = a[i];
		}
		if(a[i] < min){
			min = a[i];
		}
	}
	
	printf("The maximum value is %d\n", max);
	printf("The minimum value is %d\n", min);
	return 0;
}
