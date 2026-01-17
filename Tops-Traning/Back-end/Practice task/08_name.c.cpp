//		Write a program to print your name, age, and city.

#include <stdio.h>
#include <conio.h>


int main(){
	
	char name[10], city[10];
	int age;
	
	
	printf("Enter your name:");
	scanf("%s", &name);
	
	printf("\nMy name is %s", name);
	
	printf("\nEnter your age:");
	scanf("%d", &age);
	
	printf("\nMy age is %d", age);
	
	printf("\nEnter your city name:");
	scanf("%s", &city);
	
	printf("\nMy city name is %s", city);
	
	
	
	
	
	return 0;
}
