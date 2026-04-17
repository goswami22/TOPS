 #include <stdio.h>
 #include <conio.h>
 
 int main(){
 	
 	int a , b, max, min;
 	
	 printf("Enter a value:");
	 scanf("%d", &a); 	
 	
 	 printf("Enter b value:");
	 scanf("%d", &b);
	 
	 max = (a > b) ? a:b;
	 printf("max value is %d\n", max);
	 
 	min = (a < b) ? a : b;
 	printf("min value is %d", min);
 }
