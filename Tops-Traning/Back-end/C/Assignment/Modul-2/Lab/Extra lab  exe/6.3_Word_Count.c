//	Write a C program that counts the number of words in a sentence entered by the user. 
//  - Challenge: Modify the program to find the longest word in the sentence.


#include <stdio.h>
#include <conio.h>

int main() {
    char str[200];
    int i = 0;
    int words = 0;
    int length = 0, maxLength = 0;
    int start = 0, maxStart = 0;

    printf("Enter a sentence:\n");
    fgets(str, sizeof(str), stdin);

    while (str[i] != '\0') {
        // Count words
        if ((str[i] != ' ' && str[i] != '\n') &&
            (i == 0 || str[i - 1] == ' ')) {
            words++;
            start = i;
            length = 0;
        }

        // Count current word length
        if (str[i] != ' ' && str[i] != '\n') {
            length++;
        }

        // Check longest word
        if ((str[i] == ' ' || str[i] == '\n') && length > maxLength) {
            maxLength = length;
            maxStart = start;
        }

        i++;
    }

    printf("\nNumber of words: %d", words);

    printf("\nLongest word: ");
    for (i = maxStart; i < maxStart + maxLength; i++) {
        printf("%c", str[i]);
    }

    printf("\nLength of longest word: %d", maxLength);

    return 0;
}

