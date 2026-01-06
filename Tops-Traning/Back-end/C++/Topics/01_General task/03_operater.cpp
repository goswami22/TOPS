 #include <iostream>
 using namespace std;
 	
int main(){
	int a, b, sum;
	
//	printf("Enter a value:");    // in C 
//	scanf("%d", &a);     		// in C
	cout<< "Enter a value:";		// in C++  insted of  printf() function
	cin>>a;						// in C++    form user insted of scanf() function
	
	cout<<"Enter b value:";
	cin >> b;
	
	
	cout<< "sum is:"<< a + b<<endl;
	cout<< "Sub is:"<< a - b<< endl;
	cout<< "Multiplication: "<< a * b<< endl;
	
	 
	
	
	
	return 0;
}
