//	with arrgument and with return value.
// give n number form user and print them and it's sum.

 #include <stdio.h>
 #include <conio.h>
 int numSum(int n){
 	int i, sum=0;
 	
 	printf("Enter Your value: \n");
 	scanf("%d", &n);
 	
 	for(i = 0; i < n; i++){
 		printf("Number is %d\n", i);
 		sum += n;
 		printf("%d", sum);
	 }
 	
 	return sum;
 }
 
 
 
 int main(){
 	
 	int sum;
 	numSum(sum);
 	
 	printf("Sum is %d", numSum(sum));
 	
 	return 0;
 }
