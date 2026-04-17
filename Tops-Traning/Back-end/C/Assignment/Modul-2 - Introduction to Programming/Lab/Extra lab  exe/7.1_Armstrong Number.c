/*
	Write a C program that checks whether a given number is an Armstrong number or not (e.g.,
	153 = 1^3 + 5^3 + 3^3).
	- Challenge: Write a program to find all Armstrong numbers between 1 and 1000.
*/

#include <stdio.h>
#include <conio.h>

int main(){
	
	int i, num, orig, sum=0, digit;
	
	printf("Entre your number \n");
	scanf("%d", &num);
	
	orig = num;
	sum = 0;
	while(num != 0){
		digit = num % 10;
		sum = sum + (digit * digit * digit);
		num =  num / 10; 
	}	
	
	if(sum = orig){
		printf("%d is an Armstrong number \n");
	} else {
		printf("%d is not an Armstrong number \n");
	}
	
	for(i = 0; i <= 1000; i++){
		int temp;
		temp = i;
		sum = 0;
		while (temp != 0) {
            digit = temp % 10;
            sum = sum + (digit * digit * digit);
            temp = temp / 10;
        }

        if (sum == i){
            printf("%d\n", i);
		}
		
		
	}
	
	
	
		return 0;
}
