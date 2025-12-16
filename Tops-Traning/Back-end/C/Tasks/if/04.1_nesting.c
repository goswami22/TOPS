	#include <stdio.h>
	#include <conio.h>
	
	
	int main(){
		float a, b , c , d;
		
		printf("Enter The value a\n");
		scanf("%f", &a);
		
		printf("Enter The value b\n");
		scanf("%f", &b);
		
		printf("Enter The value c\n");
		scanf("%f", &c);
		
		printf("Enter The value d\n");
		scanf("%f", &d);
		
		
//	if (a > b) {
//	    if (a > c) {
//	        if (a > d) {
//	            printf("a is greater\n");
//	        } else {
//	            printf("d is greater\n");
//	        }
//	    } else {
//	        if (c > d) {
//	            printf("c is greater\n");
//	        } else {
//	            printf("d is greater\n");
//	        }
//	    }
//	} else {
//	    if (b > c) {
//	        if (b > d) {
//	            printf("b is greater\n");
//	        } else {
//	            printf("d is greater\n");
//	        }
//	    } else {
//	        if (c > d) {
//	            printf("c is greater\n");
//	        } else {
//	            printf("d is greater\n");
//	        }
//	    }
//	}
	
	
	if(a >= b && a >= c && a >= d){
		printf("a is Bigger number \n");
	} else if (b >= a && b >= c && b >= d) {
		printf("b is Bigger number \n");
	} else if (c >= a && c >= b && c >= d ){
		printf("c is Bigger number \n");
	} else {
		printf("d is Bigger number \n");
	}
		
		
		return 0;
	}
