#include <stdio.h>
#include <conio.h>

int fiboNum(int n){
	int i, a = 0, b = 1, c, sum = 0;
	
	for(i = 0; i < n; i++){
		if(i <= 1){
			c = i;
		}else {
			c = a + b;
			a = b;	
			b = c;
		}
		sum = sum + c;
	}
	return sum;
}



void main(){
	int num;
	printf("Enter your number: \n");
	scanf("%d", &num);
	
	printf("the total sum is : %d", fiboNum(num));
}
