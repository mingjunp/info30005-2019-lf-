#-------------------------------------------------------------------------------
# Name:        妯″潡1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     02/10/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

#Orbiting Turtles
import math
def orbit():
    import turtle
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

#Pythagorean Triples

def ptrip(a,b,c):
    if a<b and b<c:
        if a**2+b**2==c**2:
            return True


def findtriples():
 num=0
 while num<=2:
   n=int(input("Enter an upper bound > 10:"))

   if n>10:
     a=1
     b=1
     c=1
     while a<n:
         while b<n:
            while c<n:
                if ptrip(a,b,c):
                    print("(",a,b,c,")")
                c=c+1
            c=1
            b=b+1
         b=1
         a=a+1
     num=3
   else:
    print("Input error! must be > 10")
    num=num+1



findtriples()






