#-------------------------------------------------------------------------------
# Name:        妯″潡1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     23/09/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------
import turtle
import random
x=0
turtle.speed(-1000)
while (abs(turtle.xcor())<=turtle.window_width()/2) and (abs(turtle.ycor())<=turtle.window_height()/2):
     angle=random.randint(1,4)
     if angle==1:
        turtle.setheading(0)
     elif angle==2:
        turtle.setheading(90)
     elif angle==3:
        turtle.setheading(180)
     elif angle==4:
        turtle.setheading(270)
     turtle.forward(20)
     x=x+1

print(x)


