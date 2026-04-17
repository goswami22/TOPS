// Check pass or fail (marks >= 35).
#include <stdio.h>
#include <conio.h>

int main(){
	int marks;
	printf("Enter your marks: ");
	scanf("%d", &marks);
	
	if(marks >= 80 && marks <= 100){
		printf("\nYour grade is A");
	} else if(marks >= 50 && marks < 80){
		printf("\nYour grade is B");
	} else if(marks >= 35 && marks < 50) {
		printf("\nYour grade is C");
	} else {
		printf("\nYou are fail.");
	}
	
	return 0;
}
