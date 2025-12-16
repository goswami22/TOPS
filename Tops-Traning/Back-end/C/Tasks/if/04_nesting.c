#include <stdio.h>
#include <conio.h>

void main(){
	
	int a , b, c;
	
	printf("Enter a value: \n");
	scanf("%d", &a);
	
	printf("Enter b value: \n");
	scanf("%d", &b);
	
	printf("Enter c value: \n");
	scanf("%d", &c);
	
	if(a > b){
		if(a > c){
			printf("a is gretter");
		}else {
			printf("c is gretter");
		}
	} else {
		if(b > c){
			printf("b is gretter");
		}else {
			printf("c is gretter");
		}
	}
	
	
	
	
	getch();
}
