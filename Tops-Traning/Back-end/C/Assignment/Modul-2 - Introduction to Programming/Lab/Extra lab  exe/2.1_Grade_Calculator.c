 /*
 	Write a C program that takes the marks of a student as input and displays the corresponding
	grade based on the following conditions:
		o Marks > 90: Grade A
		o Marks > 75 and <= 90: Grade B
		o Marks > 50 and <= 75: Grade C
		o Marks <= 50: Grade D
	 Use if-else or switch statements for the decision-making process.
 */
 
 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	
 	int total, s1, s2, s3;
 	printf("Enter your s1 marks:");
 	scanf("%d", &s1);
 	
 	printf("Enter your s2 marks:");
 	scanf("%d", &s2);
 	
 	printf("Enter your s3 marks:");
 	scanf("%d", &s3);
 	
 	total =  ((s1 + s2 + s3) * 100) / 300; 
 	
 	if(total > 100 || total < 0){
 		printf("\nInvalid number");
	 } else if( total > 90 && total <= 100){
	 	printf("\nGrade A");
	 }else if(total > 75 && total <= 90){
	 	printf("\nGrade B");
	 } else if(total > 50 && total <= 75){
	 	printf("\nGrade C");
	 } else if(total <= 50){
	 	printf("\nGrade D");
	 }
	 
 	
 	return 0;
 }
