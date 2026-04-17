#include <stdio.h>
#include <conio.h>

int main(){
	
	int m;
	
	printf("Your marks:");
	scanf("%d", &m);
	
	if((m > 100) ||  (m < 0)){
		printf("Enter Valid marks");
	} else if(m >= 90){
		printf("A grade");
	} else if(m >= 60 && m < 90 ){
		printf("B grade");
	} else if(m >= 40 && m < 60 ){
		printf("C grade");
	} else {
		printf("Your are brient");
	}
	
	
	
	return 0;
}
