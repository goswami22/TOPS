//  Check day name using number (1–7).

#include <stdio.h>
#include <conio.h>


int main(){
	
	int day;
	printf("Enter Day number : \n");
	scanf("%d", &day);
	
	if(day == 1){
		printf("Monday\n");
	} else if(day == 2){
		printf("Thesday\n");
	} else if(day == 3){
		printf("Wednesday\n");
	} else if(day == 4){
		printf("Thursday");
	} else if(day == 5){
		printf("Friday\n");
	} else if (day == 6){
		printf("saturday\n");
	} else if(day == 7){
		printf("Sunday\n");
	} else {
		printf("Invalid number");
	}
	
	return 0;
}
