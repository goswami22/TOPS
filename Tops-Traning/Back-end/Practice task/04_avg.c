

#include <stdio.h>
#include <conio.h>

int main(){
	
	int i, num,sum=0, avg, stor;
	
	for(i = 1; i <= 3; i++){
		printf("Enter your number:");
		scanf("%d", &num);
		sum+=num;
	}
	
	
	
	avg = sum / 3;
	
	
	printf("avg num is %d\n", sum);
	printf("avg num is %d", avg);
	return 0;
}


