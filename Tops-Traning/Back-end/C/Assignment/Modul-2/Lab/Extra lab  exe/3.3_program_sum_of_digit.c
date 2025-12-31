/*	Write a C program that takes an integer from the user and calculates the sum of its digits using a while loop.
 	Challenge: Extend the program to reverse the digits of the number
 */
 
 #include <stdio.h>
 #include <conio.h>
 
 
int main(){

int n,sum = 0,rev = 0, digit;
printf("Enter number:");
scanf("%d",&n);

while(n > 0){
	digit = n % 10;
	sum = sum + digit;
	rev = rev * 10 + digit;
	n = n/10;
}



printf("sum: %d", sum);
printf("reverse : %d", rev);



return 0;
}
