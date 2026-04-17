/*
	 Write two small programs: 
	 one using Procedural Programming (POP) to calculate the area of a rectangle, 
	 and another using Object-Oriented Programming (OOP) with a
	class and object for the same task.
	- Objective: Highlight the difference between POP and OOP approaches
*/


#include <iostream>
using  namespace std;

int width, length, area;

class Areafun{
	
	public:
		void getdata(){
			cout << "Enter width:\n";
			cin >> width;
			
			cout << "Enter lenght:\n";
			cin >> length;
			
			area = width * length; 
		}
		
		void showdata(){
			cout << "area of a rectangle: "<< area;
		}
	
};

int areaFun(int width, int length){
	return width * length;
}


int main(){
	
//	With POP
	
	printf("With POP\n");

	printf("Enter width:");
	scanf("%d", &width);
	
	printf("Enter Lenght:");
	scanf("%d", &length);

printf("In Pop , area of rectangle is %d:\n", areaFun(width, length)); 
	 
	
	
	
	
//	With OOP 
	cout << "with OOP\n";
	
	Areafun a1;
	a1.getdata();
	a1.showdata();
	
	
}
	
	
