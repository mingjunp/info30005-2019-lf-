#-------------------------------------------------------------------------------
# Name:        妯″潡1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     30/09/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------
import turtle
import random

def race(t1,t2,t3):
    t1.penup()
    t2.penup()
    t3.penup()
    start=-1*turtle.window_width()/2
    finish=turtle.window_width()/2
    t1.goto(start,300)
    t2.goto(start,0)
    t3.goto(start,-300)
    while(t1.xcor()<finish) or (t2.xcor()<finish)or (t3.xcor()<finish):

        t1.goto(t1.xcor()+random.randint(1,15),300)
        t2.goto(t2.xcor()+random.r andint(1,15),0)
        t3.goto(t3.xcor()+random.randint(1,15),-300)




t1=turtle.Turtle()
t2=turtle.Turtle()
t3=turtle.Turtle()
t1.shape("turtle")
t2.shape("turtle")
t3.shape("turtle")
t1.color("red")
t2.color("blue")
t3.color("green")



race(t1,t2,t3)

