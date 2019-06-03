#-------------------------------------------------------------------------------
# Name:        模块1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     02/10/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

def orbit():
    import turtle
    import math
    #color=input("Please input the color:")
    planet=turtle.Turtle()
    moon=turtle.Turtle()
    planet.shape("circle")
    planet.color("red")
    planet.dot(50)
    planet.penup()
    planet.goto(150,0)
    planet.turtlesize(1.5,1.5,0)
    n=0
    s=0
    planet.color("blue")

    moon.shape("circle")
    moon.color("yellow")
    moon.penup()
    moon.goto(planet.xcor()+80,planet.ycor()+80)
    n=0
    s=0

    while(n<360*3):
        s=0
        planet.goto(150*math.sin(n/180*math.pi),150*math.cos(n/180*math.pi))
        while(s<360):
           moon.goto(planet.xcor()+80*math.sin(s/180*math.pi),planet.ycor()+80*math.cos(s/180*math.pi))
           s=s+5
        n=n+2


orbit()








