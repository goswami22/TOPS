 /*
 	Write a C program that takes a string as input and reverses it using a function.
   - Challenge: Write the program without using built-in string handling functions
 */
 
 #include <stdio.h>
 #include <conio.h>
 void revString(char str[]){
 	int start = 0, end = 0;
 	int temp;
// 	find length
 	while(str[end] != 0){
 		end++;
	 }
	 end = end -1; // last index
	 
	 
//	 swap char
	 while(start < end){
	 	temp = str[start];
	 	str[start] = str[end];
	 	str[end] = temp;
	 	start++;
	 	end--;
	 }
 }
  
 int main(){
 	
 	 char str[100];
 
	 printf("Enter a string\n");
	 gets(str);
	 
	 revString(str);
	 printf("Reverse string: %s\n",str);
	 
	 	
 	return 0;
 }
