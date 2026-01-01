/*
	10.Write a C program to demonstrate pointer usage. Use a pointer to modify the value of a variable and print the result.
*/

 
 #include <stdio.h>

int main() {
    int num = 10;        
    int *ptr;            

    ptr = &num;          

    *ptr = 25;

    // Print results
    printf("Value of num: %d\n", num);
    printf("Value using pointer: %d\n", *ptr);
    printf("Address of num: %p\n", &num);
    printf("Address stored in ptr: %p\n", ptr);

    return 0;
}

