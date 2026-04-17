// 	Check whether a year is leap year or not.

#include <stdio.h>
#include <conio.h>

int main(){
	
	int year;
	printf("\nEnter year:");
	scanf("%d", &year);
	
	if((year % 400 == 0) || (year % 4 == 0  && (year % 100 != 0)) ) {
		printf("year is leap.");
	} else {
		printf("year is not leap.");
	}
	
	return 0;
}
