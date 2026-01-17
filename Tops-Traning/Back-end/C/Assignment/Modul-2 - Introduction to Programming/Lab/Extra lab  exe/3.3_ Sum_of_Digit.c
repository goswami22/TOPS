/*
	Write a C program that takes an integer from the user and calculates the sum of its digits
	using a while loop.
	- Challenge: Extend the program to reverse the digits of the number.

*/

#include <stdio.h>
#include <conio.h>

int main() {

    int num, digit, sum = 0, rev = 0;

    printf("Enter your number: ");
    scanf("%d", &num);

    while (num > 0) {
        digit = num % 10;
        sum = sum + digit;
        rev = rev * 10 + digit;
        num = num / 10;
    }

    printf("Sum of digits = %d\n", sum);
    printf("Reverse number = %d\n", rev);

    return 0;
}

