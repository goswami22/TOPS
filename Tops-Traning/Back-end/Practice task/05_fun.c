//  function

#include <stdio.h>
#include <conio.h>

int name(int a, int b){
 	
 	int sum;
 	printf("Enter a value");
 	scanf("%d", &a);
	
	
	printf("Enter b value");
 	scanf("%d", &b);
 	
 	sum = a + b;
 	
	 printf("sum is %d", sum);
	 
	 	
// 	return sum;
 	
 }




int main(){
	
	int c = name(10 , 20);
//	printf("sum is %d", c);
	
	return 0;
}

