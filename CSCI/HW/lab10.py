import math
class vec3():
    def __init__(self,a=0,b=0,c=0):
        self.a=a
        self.b=b
        self.c=c

    def str(self):
        return '['+ str(self.a) + ',' + str(self.b) + ',' + str(self.c) + ']'

    def vlist(self):
        return [self.a,self.b,self.c]

    def setVaules(self,alist):
        self.a=alist[0]
        self.b=alist[1]
        self.c=alist[2]

    def float(self):
        return math.sqrt(self.a**2+self.b**2+self.c**2)

    def __add__(self, alist):
        return vec3(self.a+alist[0],self.b+alist[1],self.c+alist[2])

    def __truediv__(self, num):
        return vec3(self.a/num, self.b/num, self.c/num)


f=vec3(2,2,2)
m=2
acc=f/m
print(acc.str(),acc.float())




