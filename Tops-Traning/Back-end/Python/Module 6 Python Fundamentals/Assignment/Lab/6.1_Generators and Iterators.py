#   Write a generator function that generates the first 10 even numbers. 

def evenGen():
    for i in range(2, 20+1, 2):
        yield i
     
for x in evenGen():
    print(x)
    
        
