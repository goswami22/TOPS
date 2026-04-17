 #include <stdio.h>
 #include <conio.h>
 
 int main(){
	int a[5]= {10, 20, 30, 40,50};			// One dimension 
	int i;
	for(i = 0; i < 5; i++){
		printf("%d \n", a[i]);
	}
 	
 	int b[3];
// 	int i;
// 	user input
	for(i = 0; i< 3; i++){
		printf("Enter your number:\n");
		scanf("%d", &b[i]);
	}
	
	for(i = 0; i < 3; i++){
		printf("%d", b[i]);
	}
 	
 	return 0;
 }
