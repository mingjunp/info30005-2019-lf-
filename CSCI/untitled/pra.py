
## Workout
import turtle
import random
import math
colors = ["red", "yellow", "green", "blue", "purple", "orange", "navy"]
def randColor():
	idx = random.randint(0, 6)
	return colors[idx]
class shape():
	def __init__(self, x=0, y=0, istr = "", ibool = False):
		self.xloc = x
		self.yloc = y
		self.Fillcolor = istr
		self.Filled = ibool
	def setFillcolor(self, istr):
		self.Fillcolor = istr
	def setFilled(self, ibool):
		self.Filled = ibool
	def isFilled(self):
		return self.Filled
class circle(shape):
	def __init__(self, x=0, y=0, r=1):
		super().__init__(self,x=0,y=0,r=1)
		self.radius = r
	def draw(self, myt):
		myt.penup()
		myt.goto(self.xloc, self.yloc)
		myt.pendown()
		if self.isFilled():
			myt.fillcolor(self.Fillcolor)
			myt.begin_fill()
			myt.circle(self.radius)
			myt.end_fill()
		else:
			myt.circle(self.radius)
##    def isIN(self, x, y):
##        self.xloc
##        self.yloc
class rectangle(shape):
	def __init__(self, x=0, y=0, w=1, h=1):
		super().__init__(x, y)
		self.width = w
		self.height = h
	def draw(self, myt):
		myt.penup()
		myt.goto(self.xloc, self.yloc)
		myt.pendown()
		if self.isFilled():
			myt.fillcolor(self.Fillcolor)
			myt.begin_fill()
			for i in range(2):
				my.forward(self.width)
				myt.left(90)
				myt.forward(self.height)
				my  t.left(90)
				myt.end_fill()
		else:
			for i in range(2):
				myt.forward(self.width)
				myt.left(90)
				myt.forward(self.height)
				myt.left(90)
##    def isIN(self, x, y):
class Display():
	def __init__(self, myt=turtle.Turtle(), scr=turtle.Screen()):
		self.element = []
		self.myt = myt
		self.scr = scr
		self.scr.delay(0)
		self.myt.speed(0)
		self.myt.hideturtle()
		self.scr.onclick(self.mouseEvent)
		self.scr.listen()
	def mouseEvent(self, x, y):
		lst = self.element
		print(lst)
		deter = random.randint(0,100)
		if deter > 50:
			a = circle(x, y, random.randint(10, 100))
		else:
			a = rectangle(x, y, random.randint(50, 100), random.randint(50, 100)
			a.setFillcolor(randColor())
			a.setFilled(True))
			lst += [a]
##        for i in self.element:
##            if a.isIN == True:
##               lst.remove(a)
##            else:
##                lst.add(a)
##        for i in self.element:
##            i.draw(self.myt)
			a.draw(self.myt)

	def add(self, shape):
		self.element.append(self.shape)
	def remove(self, shape):
		self.element.remove(self.shape)

Display()