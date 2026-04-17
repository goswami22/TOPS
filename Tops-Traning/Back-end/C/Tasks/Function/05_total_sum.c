/*
	get number form user for sum

*/

#include <stdio.h>
#include <conio.h>




int totalsum(int n){
	int sum = 0 , i;
	for(i = 1; i <= n; i++){
		sum = sum + i;
	}
	return sum;
}

int main(){
	
	int num;
	printf("Enter the number:\n");
	scanf("%d", &num);
	
	
	printf("Your number : %d\n", num);
	printf("Total sum is : %d \n", totalsum(num));
	 
	return 0;
}
