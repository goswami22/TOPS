class point:
    def __init__(self, x , y):
        print('init called')
        self.x = x
        self.y = y

    def __str__(self):
        print('str called')
        return "({0}, {1})".format(self.x,self.y)


    def __add__(self, obj):
        print('add called')
        x = self.x+obj.x
        y = self.y+obj.y
        return point(x, y)
        
    def __sub__(self, obj):
        print('Sub called')
        x = self.x - obj.x
        y = self.y - obj.y
        return point(x, y)

    def __mul__(self, obj):
        print('mul called')
        x = self.x * obj.x
        y = self.y * obj.y
        return point(x, y)

    def __truediv__(self, obj):
        print('Div called')
        x = self.x / obj.x
        y = self.y / obj.y
        return point(x, y)
    
    
p1 = point(10, 20)
print(p1)

p2 = point(20, 40)
print(p2)

print('Addition f two object:',p1+p2)
print('Sunstraction of two obj:',p1-p2)
print('Multiplication of two obj:',p1*p2)
print('Divition of two obj:',p1/p2)
