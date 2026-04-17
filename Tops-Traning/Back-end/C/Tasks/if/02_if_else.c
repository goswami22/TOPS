#include <stdio.h>
#include <conio.h>

void main(){
	
	int age;
	printf("Enter Your age here:\n");
	scanf("%d", &age);
	
	if(age >= 18){
		printf("You are adult \n");
	} else {
		printf("You are not adult");	
	}
	
	getch();
}
