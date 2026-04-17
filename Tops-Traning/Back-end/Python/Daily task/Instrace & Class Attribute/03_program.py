class sample:

    like = 0
    scrore = 0

    @staticmethod
    def addCount(self, count):
        self.scrore += count
        print(self.scrore)

obj1 = sample()
obj1.like += 1
print(obj1.like)

obj1.like += 1
print(obj1.like)


obj2 =sample()
obj2.like += 1
print(obj2.like)

obj2.like += 1
print(obj2.like)

obj2.like += 1
print(obj2.like)

sample.addCount(sample, 10)
sample.addCount(sample, 30)
sample.addCount(sample, 50)
    
