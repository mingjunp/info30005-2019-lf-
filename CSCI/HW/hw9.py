class Bug():
    def __init__(self,pos=0,dir=1):
        self.pos=pos
        self.dir=dir

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



def testA():
    bug=Bug(10)
    bug.move()
    bug.turn()

    for i in range(13):
        bug.move()
        bug.display()

from time import time
import random

class Stopwatch():
    def __init__(self,startTime=time(),endTime=time()):
        self.__startTime=startTime
        self.__endTime=endTime
    def getStartTime(self):
        return self.__startTime
    def getEndTime(self):
        return self.__endTime
    def start(self):
        self.__startTime=time()
    def stop(self):
        self.__endTime=time()
    def elapseTime(self):
        return float((self.getEndTime())-(self.getStartTime()))

def testB():

    watch=Stopwatch()

    alist=[]

    for i in range(10000):
        alist.append(random.random())

    watch.start()

    alist.sort()

    watch.stop()

    print(watch.elapseTime())












