class Institute:
    def InstituteName(self, iname,iAddress):
        self.iname = iname
        self.iAddress = iAddress

    def StudentInfo(self, sName, sAge, sContact, sGmail):
        self.sName = sName
        self.sAge = sAge
        self.sContact = sContact
        self.sGmail = sGmail

    def CourseCategory(self, categoryName):
        self.categoryName = categoryName
    
    def CoursesDetails(self, cId, cName, cDuration, cFees, cDiscount, cFinalFee):
        self.cId= cId
        self.cName = cName
        self.cDuration = cDuration
        self.cFees = cFees
        self.cDiscount = cDiscount
        self.cFinalFee = cFinalFee
    
    def FollowUp(self,folloupDate, reMark):
        self.folloupDate = folloupDate
        self.remark = remark


    def StudentInfoShow(self, sName, sAge, sContact, sGmail):
        while True:
                print('*' * 50)
                print('Student Name: ', self.sName)
                print('Student Age: ', self.sAge)
                print('Student Contact', self.sContact)
                print('Student Gmail', self.sGmail)
                print('*' * 50)

    def CoursesDetailsShow(self, cId, cName, cDuration, cFees, cDiscount, cFinalFee):
        cFees  = 57000
        print('Total Course Fees: ', cFees)
                            
        cDiscount =   cFees % 3  / 100
        print('Disount: ', cDiscount)

        cFinalFee = cFees - cDiscount 
        print('Final Fees: ', cFinalFee)

i1.Institute()
i1.InstituteName('Tops', 'Ahmedabad')

def CoursesMenu(self):
    while True:
        
            print('*' * 50)
            print('1. Front End Developer')
            print('2. Back End Developer')
            print('3. Full stack Developer')
            print('4. Data Analysis')
            print('5. Data Scientist')
            print('6. Exit')
            print('*' * 50)
            
            choise = int(input('Enter Your choise: '))
            print('*' * 50)

            if choise == 1:
                i1.CoursesDetailsShow(1, 'Front End Developer',57000)
                
            elif choise == 2:
                i1.CoursesDetailsShow(2, 'Back End Developer',68000)
              
            elif choise == 3:
                i1.CoursesDetailsShow(3, 'Full Stack Developer',100000) 
                
            elif choise == 4:
                i1.CoursesDetailsShow(4, 'Data Analysis',130000)

            elif choise == 5:
                i1.CoursesDetailsShow(5, 'Data Scientist',150000)
                

            elif choise == 6:
                print('Thank you For Visit Our Center')
                break
            else:
                print('Invalid Number, Please Try Again')
        

    

        
        
    










    

