 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	
	FILE *fp;						// file pointer - store a address of file
	char str[100];
	
	fp = fopen("demo.txt", "w");	//new file open and write some text with read mode		
	
	if(fp == NULL) {				// check condition fill is write or not
		printf("File is emply");
		return 1;
	}
	
	fprintf(fp, "The first text added in this file");			// add text in this file
	
	fclose(fp);									// close this file
		
	fp = fopen("demo.txt","r");					// reopen file with reade mode
	
	while(fgets(str,sizeof(str),fp) != NULL){		// show text 
		printf("%s",str);
	}
	
	fclose(fp);
	return 0;
 	
 }
