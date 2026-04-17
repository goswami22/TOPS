/* 	Se - Introduction To Programming
	
	It should be a menu driven approach, for which you are suppose to use the functions concept.
	
	Over Here, take string input from user and perform string operations listed below :
	
	-> reverse a string
	-> Concatenation
	-> Palindrome
	-> Copy a string
	-> Length of the string
	-> Frequency of character in s string
	-> Find number of vowels and consonants
	-> Find number of blank spaces and digits
	
	As given above perform the operation as per user’s choice
	If user will not select any of the above then it should not perform any operation and
	give an appropriate user friendly message
	After performing the operation ask the user if the user wants to continue or not ?


*/

#include <stdio.h>
#include <conio.h>
#include <string.h>


// reverse a string function
void restr(char str1[]){
	strrev(str1);
	printf("Reverse string is %s\n" , str1);
}

// Concatenation function
void constr(char str1[], char str2[]){
	
	strcat(str1, str2);
	printf("tow string Concatenation is %s\n", str1);
}

//  Length of the string function
void lenstr(char str1[]){
	int l1 = strlen(str1);
	printf("The lenght of string is %d\n", l1); 
}

//	Copy a string function
void cpystr(char str1[], char str2[]){
	strcpy(str2, str1);
	printf("Copy string is %s\n", str2);
}

// Palindrome
void plnstr(char str1[]){
	char temp[100];
	
	
	strcpy(temp, str1);
	strrev(temp);
	
	if(strcmp(str1, temp) == 0){
		printf("String is palidram\n");
	} else {
		printf("String is not palidram\n");
	}
}

//	Frequency of character in s string
void frestr(char str1[], char ch){
    int i, count = 0;
    
    for(i = 0; str1[i] != '\0'; i++){
        if(str1[i] == ch){
            count++;
        }
    }
    
    printf("Frequency of character %c is %d\n", ch, count); 
}

// 	Find number of vowels and consonants
void vowconstr(char str1[]){
	int i, vowels = 0, consonants = 0;
	
	for(i = 0; str1[i] != '\0'; i++){
		
//		For consonants
		if((str1[i] >= 'A' && str1[i] <= 'Z') || (str1[i] >= 'a' && str1[i] <= 'z')){
			
//			For vowels
			if(str1[i] == 'a' || str1[i] == 'e' || str1[i] ==  'i' || str1[i] == 'o' || str1[i] == 'u' ||
			str1[i] == 'A' || str1[i] == 'E' || str1[i] == 'I' || str1[i] == 'O' || str1[i] == 'U'){
				vowels++;
			}  else {
				consonants++;
			}
			
		}
	
	}
	printf("Number of vowels is %d\n", vowels);
	printf("Number of consonants is %d\n", consonants);
	
}

// find Number of Blank Space and Digit 
void scdistr(char str1[]){
	int i, space = 0, digit = 0;
	
	for(i = 0; str1[i] != '\0'; i++){
		if(str1[i] == ' '){
			space++;
		} else if(str1[i] >= '0' && str1[i] <= '9'){
			digit++;
		}
	}
	
	printf("Total blank space =  %d\n", space);
	printf("Total digit = %d\n", digit);
	
	
}

int main(){
	
	char str1[100], str2[100], ch, choisechar;
	int choice;
	
	printf("Enter your string 1\n");
	gets(str1);
	
	printf("Enter your string 2\n");
	gets(str2);
		
	do{
		printf("\n=== Menu ===\n");
		printf("1. reverse a string\n");
		printf("2. Concatenation of string\n");
		printf("3. The lenght of string\n");
		printf("4. Copy string is\n");
		printf("5. Palidram sring check\n");
		printf("6. Frequency of character in string\n");
		printf("7. number of vowels and consonants\n");
		printf("8. Total Black space and digit\n");
		
		printf("Enter your choice: ");
		scanf("%d", &choice);
	
	
		switch(choice){
			case 1:
				restr(str1);
				break;
			
			case 2:
				constr(str1, str2);
				break;
				
			case 3:
				lenstr(str1);
				break;
			
			case 4:
				cpystr(str1, str2);
				break;
				
			case 5:
				plnstr(str1);
				break;		
		
			case 6:
				printf("Enter Charater find frequantly: ");
				scanf(" %c", &ch);
				frestr(str1, ch);
				break;
				
			case 7:
				vowconstr(str1);
				break;
				
			case 8:
				scdistr(str1);	
				break;
				
			default :
				printf("Invalid Choice\n");
		
		}
		
		printf("\nDo you wnat to continue (Y/n): ");
		scanf(" %c", &choisechar);
		
	} while(choisechar == 'Y' || choisechar == 'y');
	
	
	return 0;
}
