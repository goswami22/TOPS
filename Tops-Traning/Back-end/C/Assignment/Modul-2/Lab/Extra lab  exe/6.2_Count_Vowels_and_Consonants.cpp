/*
	Write a C program that takes a string from the user and counts the number of vowels and
	consonants in the string.
	- Challenge: Extend the program to also count digits and special characters.
*/

#include <stdio.h>
#include <conio.h>


int main(){
	char str[100];
	int i = 0;
	int vowels = 0, consonants = 0,	digit = 0, special = 0;
	
//	print string
	printf("Enter your string:");
	gets(str);
	
	while(str[i] != '\0'){
		
		if(str[i] == 'a'|| str[i] == 'e' || str[i] == 'i'|| str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || 
		str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
			vowels++;
		 } else if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <='Z')){
		 	consonants++;
		 } else if(str[i] >= 0 && str[i] <= 9){
		 	digit++;
		 }  else {
		 	special++;
		 };
		 
		 i++;	
	};
	
	printf("\n vowels: %d", vowels);
	printf("\n consonants: %d", consonants);
	printf("\n Digit: %d", digit);
	printf("\n special: %d", special);
	return 0;
}

 

