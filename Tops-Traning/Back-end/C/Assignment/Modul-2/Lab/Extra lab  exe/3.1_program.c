/*
	- Write a C program that checks whether a given number is a prime number or not using a for
	loop.
	- Challenge: Modify the program to print all prime numbers between 1 and a given number

*/
#include <stdio.h>
#include <conio.h>

int main() {

    int n, i, j, count = 0;

    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Prime numbers between 1 and %d are:\n", n);

    for (i = 2; i <= n; i++) {
        count = 0;

        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++;
                break;
            }
        }

        if (count == 0) {
            printf("%d ", i);
        }
    }

    return 0;
}

