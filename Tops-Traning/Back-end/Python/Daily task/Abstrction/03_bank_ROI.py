from abc import ABC, abstractmethod

class RBI(ABC):

    @abstractmethod
    def ROI(self,r):
        pass

class SBI(RBI):
    def display(self):
        print('Display SBI')
    def ROI(self,r):
        print('As per RBI intrest', r)

class HDFC(RBI):
    def display(self):
        print('Display HDFC')
    def ROI(self,r):
        print('As per RBI intrest', r)
 



s1 = SBI()
s1.display()
s1.ROI(5.5)

h2 = HDFC()
h2.display()
h2.ROI(7.5)
