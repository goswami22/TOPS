#include <stdio.h>
#include <conio.h>

int main() {

	//	 average number

	int Maths, English , Science , Gujarati;

	printf("Enter the Maths Value here:\n");
	scanf("%d", &Maths);

	printf("Enter the English Value here:\n");
	scanf("%d", &English);

	printf("Enter the Scince Value here:\n");
	scanf("%d", &Science);
	
	printf("Enter the Gujarati Value here:\n");
	scanf("%d",&Gujarati);

	int avg = (Maths + English + Science + Gujarati) / 4;
	printf("The average number is %d\n", avg);

	float per = ((Maths + English + Science + Gujarati) * 100.0) / 400;
	printf("The percentage of Total marks is %.2f%% \n", per);

	
	if(per >= 80 && per <= 100) {
		printf("Student Grade is A \n");
	} else if(per >= 60 && per < 80){
		printf("Student Grade is B \n");
	} else if(per >= 40 && per < 60){
		printf("Student Grade is C \n");
	} else {
		printf("You are fail");
	}


	return 0;
}
