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

// function

void restr(char str[]){
	printf("Enter your string 1");
	scanf("%s", &str1);
	
	strrev(str);
	printf("Reverse string is %s\n" , str);
}


int main(){
	
	char str1[100];
	char str2[100];
	
	
	
	
//	printf("Enter your string 2");
//	scanf("%s", &str2);
	
	
	int choice;
	
	printf("Enter your choice\n");
	scanf("%d", &choice);
	
		switch(choice){
			case 1:
				restr(str1);
				break;
		}
	
	return 0;
}
