#include <stdio.h>
#include <conio.h>

int main(){
	
	
	int a, b, c;
	
	printf("Enter a value: \n");
	scanf("%d", &a);
	
	printf("Enter b value: \n");
	scanf("%d", &b);
	
	printf("Enter c value: \n");
	scanf("%d", &c);
	
	if(a >= b && a>= c){
		printf("a is begger numbar");
	}else if(b >= a && b >= c){
		printf("b is begger numbar");
	} else {
		printf("c is begger numbar");
	}
	
	
	return 0;
}
