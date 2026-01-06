#include <stdio.h>
#include <conio.h>


int main(){
	
	int age;
	
	printf("Enter your age:");
	scanf("%d", &age);
	
	if(age > 18){
		printf("You are allow");
	} else {
		printf("You are not allow");
	}
	 
	return 0;
}
