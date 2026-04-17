class Tops:

    def getData(self, fname, lname):
        self.f = fname
        self.l = lname
    def putData(self):
        print("First Name: ", self.f)
        print("Last Name: ", self.l)

t1=Tops()
t1.getData('Bhavesh', 'Goswami')
t1.putData()

t2=Tops()
t2.getData('Keval', 'Patel')
t2.putData()

t3 = Tops()
t3.getData('Raj', 'Patel')
t3.putData()
