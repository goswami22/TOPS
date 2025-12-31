/*
	Write a C program that takes N numbers from the user and stores them in an array. The
	program should then calculate and display the sum of all array elements.
	- Challenge: Modify the program to also find the average of the numbers.

*/


#include <stdio.h>
#include <conio.h>

int main(){
	
	int n, i,sum=0,avg;
	
	printf("enter N number :\n");
	scanf("%d",&n);
	int a[n];
	
	for(i = 0; i < n; i++){
		printf("Enter your number: \n");
		scanf("%d",&a[i]);
	}
	
	for(i = 0; i < n; i++){
		printf("a[%d] : %d \n",i,a[i]);
		sum+=a[i];
	}
	printf("\nsum :%d",sum);
	
	avg=sum/n;
	printf("\n avg :%d",avg);
	return 0;
	
}
