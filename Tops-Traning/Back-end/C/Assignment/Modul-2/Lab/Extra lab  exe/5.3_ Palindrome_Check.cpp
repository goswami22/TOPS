/*
	Write a C program that takes a number as input and checks whether it is a palindrome using a function.
	- Challenge: Modify the program to check if a given string is a palindrome
*/

#include <stdio.h>

int pl(int n) {
    int digit, rev = 0, temp;
    
    temp = n;
    
    while (n > 0) {
        digit = n % 10;
        rev = rev * 10 + digit;
        n = n / 10;
    }
    
    return rev;
}

int main() {
    int n, num_storage;
    
    printf("Enter number:\n");
    scanf("%d", &n);
    
    num_storage = pl(n);   // Correct assignment
    
    if (n == num_storage) {
        printf("Number is palindrome\n");
    } else {
        printf("Number is not palindrome\n");
    }
    
    return 0;
}

