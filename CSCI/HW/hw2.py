#-------------------------------------------------------------------------------
# Name:        濡€虫健1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     26/09/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

#Orbiting Turtles

def orbit():
    import turtle
    import math
    color=input("Please input the color:")
    turtle.color(color)
    turtle.dot(40)
    turtle.penup()
    turtle.goto(150,0)
    n=0
    turtle.shape("circle")
    turtle.color("blue")

    while(n<360*3):
        turtle.goto(150*math.sin(n/180*math.pi),150*math.cos(n/180*math.pi))
        n=n+1


orbit()

#Compound Interest
n=0

def compound(startingAmount,targetAmount,interestRate):
    global n
    while(startingAmount<=targetAmount):
        startingAmount=startingAmount*(1+interestRate)
        n=n+1
        startingAmount=compound(startingAmount,targetAmount,interestRate)

    return startingAmount

compound(1000.00,10000.00,.02)

print(n)

#Perfect Numbers
def perfect(n):
    sum=0
    i=1
    while i<n:
        if(n%i==0):
            sum=sum+i
            i=i+1
        else:
            i=i+1
    if(sum==n):
        return True
    else:
        return False

def perfectList(upperlimit):
    n=1
    while(n<=upperlimit):
        n=n+1
        if perfect(n)==True:
            print(n)


perfectList(9000)



