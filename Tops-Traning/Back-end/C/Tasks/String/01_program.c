 /*
 	string is colletion of multiple char
 	
 */
 
 #include <stdio.h>
 #include <conio.h>
 #include <string.h>
 
 
 int main(){
 	
// 	charecter 
 	char a = 'b';
 	printf ("A is %c", a);
 	
 	
// 	string
	char name[100] = "bhavesh";
		
	
	printf("\n %s", name);
	
	
//	from User
	char fname[10];
	printf("Enter Your name \n");
//	scanf("%s", &fname);
	gets(fname);									// insted of scanf 
	printf("\nYour name is %s", fname);
	
	
//	length

	int l1 = strlen(fname);
	
	printf("\nlenght is : %d", l1);
	
	
//	copy
	
	char lname[10]= "Goswami";
	char full=  strcpy(name, lname);
	printf("Your full name: %s", full );
 	
 	return 0;
 }
