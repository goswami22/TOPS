class Institute:

    def InstituteInfo(self, i_name, i_address):
        self.i_name = i_name
        self.i_address = i_address

    def ShowInstituteInfo(self):
        print('Institute Name: ', self.i_name)
        print('Institute Address: ', self.i_address)
   
    def StudentInfo(self, s_name, s_age, s_contact):
        self.s_name = input("Enter Student name: ")
        self.s_age = int(input("Enter Student Age: "))
        self.s_contact = int(input("Enter Student Contact Number: "))

    def ShowstudentInfo(self):
        print("Student Name: ", self.s_name)
        print("Student Age: ", self.s_age)
        print("Student Contact: ", self.s_contact)
          
    def ShowCourseCategoryDetail(self, course_Id, course_Name, course_Duration, course_Fees):
        course_Discount = course_Fees * 3 /100
        course_Final_Fee = course_Fees - course_Discount

        print('Course Id: ', course_Id)
        print('Course Name: ', course_Name)
        print('Course Duration: ', course_Duration)
        print('Course Fees: ', course_Fees)
        print('Course Discount: ', course_Discount)
        print('Course Final Fees ', course_Final_Fee)
    
l1 = Institute()
print('Tops Inquiry'.center(50, '='))
l1.InstituteInfo('Tops', 'Nikol Ahmedabad')
l1.ShowInstituteInfo()

print('Student Info'.center(50, '='))
l1.StudentInfo('Bhavesh', 30, '968569623')
l1.ShowstudentInfo()

print('Course Details'.center(50, '='))

while True:

    print('Course Menu'.center(50, '='))
    print('1. Front End Development')
    print('2. Back End Development') 
    print('3. Full Stack Development') 
    print('4. Data Analysis')
    print('5. Data Scientist')
    print('6. Exit')
    choice = int(input('Enter Your Choice: '))
    
    print('Course Info'.center(50, '='))
    if choice == 1:
        l1.ShowCourseCategoryDetail(1,'Fornt End Developer','1 year', 57000)
    elif choice == 2:
        l1.ShowCourseCategoryDetail(2,'Back End Developer','1 year', 67000)
    elif choice == 3:
        l1.ShowCourseCategoryDetail(3, 'Full Stack Developer','1 year', 100000)
    elif choice == 4:
        l1.ShowCourseCategoryDetail(4, 'Data Analysis', '1 year', 130000)
    elif choice == 5:
        l1.ShowCourseCategoryDetail(4, 'Data Scientist', '1 year', 150000)
    elif choice == 6:
        print('Thank You For Visited our Branch')
        break
    else:
        print('Invalid number, Please Enter Valid Number')
    







    
