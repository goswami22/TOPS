//	Write a program to perform all arithmetic operations.

#include <stdio.h>
#include <conio.h>

int main(){
	
	int a, b, sum,sub, multi, div,mod, inc,dec;
	
	printf("Enter a value: \n");
	scanf("%d", &a);
	
	printf("Enter b value: \n");
	scanf("%d", &b);
	
	printf("a value is %d and b value is %d\n", a, b);
	
	sum = a + b;	
	printf("Sum is %d\n", sum);
	
	sub = a - b;
	printf("Substraction is %d\n", sub);
	
	multi = a * b;
	printf("Multiplication is %d\n", multi);
	
	div = a / b;
	printf("division is %d\n", div);
	
	mod = a % b;
	printf("Modual is %d\n", mod);
	
	inc = a++;
	printf("Increment of a is %d\n", inc);
	printf("After Increment a is %d\n", a);
	
	dec = b--;
	printf("Decrement of b is %d\n", dec);
	printf("After Decrement a is %d\n", b);
	
	return 0;
}
