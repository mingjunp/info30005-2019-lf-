# Wind Chill
def windchill(temp,wind):
	t=35.74+0.6215*temp-35.75*wind**0.16+0.4275*temp*wind**0.16

t=windchill(-15,20)
print(t)

# Baby It's Cold Outside
def computeWC():
	temp=input("Enter temperature(F):")
	wind=input("Enter wind velocity(MPH):")
	temp=float (temp)
	wind=float (wind)
	t=35.74+0.6215*temp-35.75*wind**0.16+0.4275*temp*wind**0.16
	print("The windchill is:",t)

computeWC()

# Turtle Star

import turtle

def drawStar():
	length=input("Enter the length of each side:")
	length=float(length)
	for i in range(0,5):
		turtle.forward(length)
		turtle.right(144)


drawStar()