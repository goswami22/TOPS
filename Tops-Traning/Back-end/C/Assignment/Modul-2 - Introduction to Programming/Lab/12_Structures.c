 /*
 	Write a C program that defines a structure to store a student's details (name, roll number, and marks). 
	Use an array of structures to store details of 3 students and print them.
 */
 
 #include <stdio.h>
 #include <conio.h>
 
struct student {
    char name[50];
    int roll;
    float marks;
};

int main() {

    struct student s[3];
    int i;

    // Input student details
    for (i = 0; i < 3; i++) {
        printf("\nEnter details of student %d\n", i + 1);

        printf("Name: ");
        scanf(" %s", s[i].name);

        printf("Roll Number: ");
        scanf("%d", &s[i].roll);

        printf("Marks: ");
        scanf("%f", &s[i].marks);
    }

    // Display student details
    printf("\n--- Student Details ---\n");
    for (i = 0; i < 3; i++) {
        printf("\nStudent %d\n", i + 1);
        printf("Name : %s\n", s[i].name);
        printf("Roll : %d\n", s[i].roll);
        printf("Marks: %.2f\n", s[i].marks);
    }

    return 0;
}
