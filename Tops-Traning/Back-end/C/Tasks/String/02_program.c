/*
    string copy function
*/

#include <stdio.h>
#include <string.h>

int main(){

    char name[100] = "bhavesh";
    char lname[10] = "Gosai";
//    printf("Name: %s\n", name);

    // from user
//    char fname[10];
//    printf("Enter Your name:\n");
//    fgets(fname, 10, stdin);
//    printf("Your name is %s", fname);

//	concatination
	strcat(name, lname);
	
	printf("\nYour full name: %s", name);
	

    // copy
    

    strcpy(name, lname);   // copy lname into name

    printf("\nYour copy name: %s", name);
    
    
//    length
	int l1 = strlen(lname);
	printf("\nleangth of name is %d", l1);



//	compare 
	if(strcmp(name, lname) == 0){
		printf("\nString are equal");
	} else {
		printf("\nString are not equal");
	}
    
	
	
	
	
	
	return 0;
}

