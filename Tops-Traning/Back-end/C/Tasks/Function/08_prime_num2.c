/*
    Find prime number
*/

#include <stdio.h>
#include <conio.h>

int primNum(int n) {
    int i;

    if (n <= 1) {
        return 0;   // Not prime
    }

    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            return 0;   // Not prime
        }
    }

    return 1;   // Prime number 
}

void main() {
    int num;
    printf("Enter your number: ");
    scanf("%d", &num);

    if (primNum(num)) {
        printf("Prime number");
    } else {
        printf("Not prime number");
    }

    getch();
}

