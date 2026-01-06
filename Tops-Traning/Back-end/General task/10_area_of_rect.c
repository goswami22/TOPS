//	Write a program to calculate area of a rectangle.

#include <stdio.h>
#include <conio.h>

int main(){
	
	int w, l, area;
	
	printf("Enter width: ");
	scanf("%d", &w);
	
	printf("Enter length: ");
	scanf("%d", &l);
	
	
	area = w * l;
	printf("The area of rectangle is %d", area);
	
	return 0;
}
