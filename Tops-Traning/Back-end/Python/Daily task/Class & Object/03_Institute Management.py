class Institute:

    def __init__(self):
        self.inquiries = []   # store all students

    def InstituteName(self, iname, iAddress):
        self.iname = iname
        self.iAddress = iAddress

    def AddStudentInquiry(self):

        sName = input("Enter Student Name: ")
        sAge = input("Enter Age: ")
        sContact = input("Enter Contact: ")
        sGmail = input("Enter Email: ")

        student = {
            "name": sName,
            "age": sAge,
            "contact": sContact,
            "email": sGmail
        }

        self.inquiries.append(student)

        print("Student Inquiry Added Successfully!\n")

    def ShowAllInquiries(self):

        print("\n------ ALL STUDENT INQUIRIES ------")
        for i in self.inquiries:
            print("Name :", i["name"])
            print("Age :", i["age"])
            print("Contact :", i["contact"])
            print("Email :", i["email"])
            print("-" * 30)

    def CourseMenu(self):

        print("\nSelect Course")
        print("1. Front End Developer - 57000")
        print("2. Back End Developer - 68000")
        print("3. Full Stack Developer - 100000")
        print("4. Data Analysis - 130000")
        print("5. Data Scientist - 150000")

        ch = int(input("Enter Choice: "))

        if ch == 1:
            self.ShowCourse("Front End Developer", 57000)
        elif ch == 2:
            self.ShowCourse("Back End Developer", 68000)
        elif ch == 3:
            self.ShowCourse("Full Stack Developer", 100000)
        elif ch == 4:
            self.ShowCourse("Data Analysis", 130000)
        elif ch == 5:
            self.ShowCourse("Data Scientist", 150000)
        else:
            print("Invalid Choice")

    def ShowCourse(self, name, fees):

        discount = fees * 3 / 100
        final_fee = fees - discount

        print("\nCourse Name :", name)
        print("Duration : 1 Year")
        print("Fees :", fees)
        print("Discount :", discount)
        print("Final Fees :", final_fee)


# ---------- MAIN PROGRAM ----------

i1 = Institute()
i1.InstituteName("Tops", "Ahmedabad")

while True:

    print("\n===== INSTITUTE SYSTEM =====")
    print("1. New Student Inquiry")
    print("2. Select Course")
    print("3. Show All Inquiries")
    print("4. Exit")

    choice = int(input("Enter Choice: "))

    if choice == 1:
        i1.AddStudentInquiry()

    elif choice == 2:
        i1.CourseMenu()

    elif choice == 3:
        i1.ShowAllInquiries()

    elif choice == 4:
        print("Thank You!")
        break

    else:
        print("Invalid Choice")
