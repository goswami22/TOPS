/*
	Write a C program that generates Pascal’s Triangle up to N rows using loops.
	- Challenge: Implement the same program using a recursive function.
*/

#include <stdio.h>
#include <conio.h>

int main() {
    int n, i, j;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        int value = 1;

        for (j = 0; j <= i; j++) {
            printf("%d ", value);
            value = value * (i - j) / (j + 1);
        }
        printf("\n");
    }

    return 0;
}


