from abc import ABC,abstractmethod

class A(ABC):

    @abstractmethod
    def show(self):
        pass

class B(A):
    def display(self):
        print('Display Form B')
    def show(self):
        print('Show Defined in Class B')


class C(A):
    def display(self):
        print('Display From C')
    def show(self):
        print('Show Defined in Class C')



b1 = B()
b1.display()
b1.show()


c1 = C()
c1.display()
c1.show()   
        
    
