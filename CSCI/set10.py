import math
# A
class Circle():
    def __init__(self,radius = 1):
        self.__radius = radius

    def setRadius(self,r):
        self.__radius = r

    def getCircumference(self):
        return 2*math.pi*self.__radius

    def getArea(self):
        return math.pi*self.__radius*self.__radius

print('A Circle Class')
circle = Circle()
circle.setRadius(2)
print(circle.getArea())
print('我是优雅的分隔线----------------------')

# B
class Bug():
    def __init__(self,pos=0):
        self.pos=pos
        self.dir=1

    def move(self):
        if self.pos>0:
            if self.dir==1:
                self.pos+=1
            else:
                self.pos-=1

    def turn(self):
        if self.dir==1:
            self.dir=-1
        else:
            self.dir=1

    def display(self):
        step=''
        for i in range(self.pos):
            step=step+'.'
        if self.dir==1:
            step=step+'>'
            print('position',self.pos ,', direction right: ' +step)
        else:
            step=step+'<'
            print('position', self.pos , ', direction left: ' +step)

print('B Bug Class')
def testA():
    bug=Bug(10)
    bug.move()
    bug.turn()

    for i in range(13):
        bug.move()
        bug.display()
testA()
print('我是优雅的分隔线---------------------------')

# C

from time import time
import random

class Stopwatch():
    def __init__(self,startTime=time(),endTime=time()):
        self.__startTime = startTime
        self.__endTime=endTime
    def getStartTime(self):
        return self.__startTime
    def getEndTime(self):
        return self.__endTime
    def start(self):
        self.__startTime = time()
    def stop(self):
        self.__endTime = time()
    def elapseTime(self):
        return float((self.getEndTime())-(self.getStartTime()))

print('C Stopwatch Object')
def testB():
    watch=Stopwatch()
    alist=[]
    for i in range(10000):
        alist.append(random.random())
    watch.start()
    alist.sort()
    watch.stop()
    print(watch.elapseTime())

testB()

print('我是优雅的分隔线---------------------------')
# D
print('D Sparse Matrices')
class Smatrix():
    def __init__(self,d = {}):
        self.__d = d
    def get(self,row,col):
        if self.__d[(row,col)]:
            return self.__d[(row,col)]
        else:
            return 0
    def set(self,row,col,value):
        if value==0:
            self.__d.pop((row,col))
        else:
            self.__d[(row,col)] = value
    def __repr__(self):
        maxRow = 0
        maxCol = 0
        keys = list(self.__d.keys())
        for i in keys:
            if i[0]>maxRow:
                maxRow = i[0]
            if i[1]>maxCol:
                maxCol = i[1]
        for i in range(maxRow+1):
            for j in range(maxCol+1):
                if (i,j) in self.__d.keys():
                    print(self.__d[(i,j)],end=' ')
                else:
                    print('0',end=' ')
            print()

    def __add__(self, other):
        d = {}
        for i in list(self.__d.keys()):
            d[i] = self.__d[i] + other.get(i[0], i[1])
        return Smatrix(d)

m1 = Smatrix()
m1.set(0, 0, 2)
m1.set(0, 1, 2)
m2 = Smatrix()
m2.set(0, 0, 1)
m2.set(0, 1, 4)
m3 = m1 + m2
m3.__repr__()

