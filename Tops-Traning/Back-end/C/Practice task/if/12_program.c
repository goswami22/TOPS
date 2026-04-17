// Check student pass in all subjects.

#include <stdio.h>
#include <conio.h>


int main(){
	
	int sb1, sb2, sb3, sb4, sb5;
	printf("Enter sb1 marks:");
	scanf("%d", &sb1);
	
	printf("Enter sb2 marks:");
	scanf("%d", &sb2);
	
	printf("Enter sb3 marks:");
	scanf("%d", &sb3);
	
	printf("Enter sb4 marks:");
	scanf("%d", &sb4);
	
	printf("Enter sb5 marks:");
	scanf("%d", &sb5);
	
	if(sb1 >= 35 && sb2 >= sb2 && sb3 >= 35 && sb4 >= 35 && sb5 >= 35){
		printf("You are pass\n");
	} else {
		printf("You are Fail\n");
	}	 
	
	
	
	return 0;
}
