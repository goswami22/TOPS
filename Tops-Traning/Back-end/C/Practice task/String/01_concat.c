#include <stdio.h>
#include <conio.h>
#include <string.h>

int main(){
	
	
	char fname[10], lname[10];
	
//	from user input
	printf("Enter Your First name : \n");
//	scanf("%s", fname);						gets insted of 
	gets(fname);
	
	printf("Enter Your Last name : \n");
//	scanf("%s", lname);
	gets(lname);
	
	
//	concatenates
	strcat(fname," ");							// first name
	strcat(fname,lname);
	printf("the full name is %s \n", fname);
	
	
//	string lenght 
	int l1 = strlen(fname);						
	printf("the lenght of string is %d", l1);

		
//	copy
	strcpy(fname, lname);						// first name 
	printf("\ncopy fucnction : %s", fname);		
	return 0;
	
//	compare
	
}

