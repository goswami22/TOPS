/*
	Write a C program that takes two strings from the user and concatenates them
	using strcat(). Display the concatenated string and its length using
	strlen().
*/

#include <stdio.h>
#include <conio.h>
#include <string.h>
int main(){
	
	char fname[10], lname[10];
	
	printf("Enter Your first name: \n");
	scanf("%s", fname);
	
	printf("Enter Your Last name: \n");
	scanf("%s", lname);
	
//	concatenates
	strcat(fname," ");
	strcat(fname,lname);
	printf("Fullame is %s:",fname);
	
	
//	length
	int l1 = strlen(fname);
	printf("The lenght is %d", l1);
	
	return 0;
}	
