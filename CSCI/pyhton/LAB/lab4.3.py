#-------------------------------------------------------------------------------
# Name:        濡€虫健1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     30/09/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------
import turtle


def draw(x,y,turtle,flag):
     if flag==1:
      turtle.fillcolor(0,1,0)
     else:
        turtle.fillcolor(1,0,0)
     turtle.penup()
     turtle.goto(x,y)
     turtle.begin_fill()
     turtle.goto(x+100,y)
     turtle.goto(x+100,y+100)
     turtle.goto(x,y+100)
     turtle.end_fill()

def board():
    w=turtle.window_width()/2
    h=turtle.window_height()/2
    turtle.penup()
    turtle.speed(0)
    turtle.hideturtle()

    x=-1*w
    y=-1*h
    flag=1
    while x<w:
        while y<h:
           draw(x,y,turtle,flag)
           flag=flag*-1
           y=y+100

        y=-1*h
        x=x+100

board()

