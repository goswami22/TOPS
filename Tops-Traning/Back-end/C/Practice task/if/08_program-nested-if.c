// 	Check admission eligibility (age + marks) using nested-if.

#include <stdio.h>
#include <conio.h>

int main(){
	
	int marks, age;	
//	nested if
	printf("\nEnter your age:");
	scanf("%d", &age);
	
	printf("\nEnter your marks:");
	scanf("%d", &marks);
	

	if(marks >= 35){
		if(age >= 18){
			printf("you are eligible for admition");
		} else {
			printf("you are not eligible for admition (age > 18)");
		}
	} else {
		printf("you are not eligible for admition (marks > 35)");
	}


	
	return 0;
}




