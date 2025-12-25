 /*
 	Write a C program to create a file, write a string into it, close the file, then
open the file again to read and display its contents.
 */
 
 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	
 	FILE *fp;								// file pointer, pointer stores the address of a file
 	char str[100];
 	
 	fp = fopen("demo.txt","w");  			// crete a file and read mode 
 	
 	if(fp == NULL) {
 		printf("Error, file not write");
 		return 1;
	 }
 	
	 fprintf(fp,"new text added in this file.");			// add new text in this file
	 
	 fclose(fp);			// Close this file
	 

	fp = fopen("demo.txt","r");		//	 open again file with read mode 
	
	if(fp == NULL){
		printf("file is not open");
		return 1;
	}
	
	//	display the content
	while(fgets(str, sizeof(str), fp) != NULL) {
		printf("%s", str);
	}
	fclose(fp);

 		
 	return 0;
 }
