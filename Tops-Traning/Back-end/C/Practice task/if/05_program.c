//Check whether a person is eligible to vote (age = 18).


#include <stdio.h>
#include <conio.h>

int main(){
	
	int age;
	printf("Enter  your age: \n");
	scanf("%d", &age);
	
	if( age >= 18){
		printf("\nperson is eligible to vote");
	} else {
		printf("\nperson is not eligible to vote");
	}
	
	
	return 0;
}
