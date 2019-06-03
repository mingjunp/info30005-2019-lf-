#-------------------------------------------------------------------------------
# Name:        模块2
# Purpose:
#
# Author:      forev
#
# Created:     21/09/2017
# Copyright:   (c) forev 2017
# Licence:     <your licence>
#-------------------------------------------------------------------------------


def roundit():
    import random
    x = random.uniform(-100,100)
    if type(x)== int:
        return x
    else:
        return int(x)

import turtle

turtle.showturtle()

sidelength = turtle.numinput('','sidelength:')

def Drawsquare(sidelength):

    turtle.forward(sidelength)

    turtle.left(90)

    turtle.forward(sidelength)

    turtle.left(90)

    turtle.forward(sidelength)

    turtle.left(90)

    turtle.forward(sidelength)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

turtle.right(36)

Drawsquare(sidelength)

t=int(10)
x=1
while x<=t:
    Drawsquare()
    turtle.right(36)
    x=x+1

angle=turtle.numinput('','input:')
rotation=360/angle
t=int(rotation)
x=1
while x<=t:
    Drawsquare()
    turtle.right(angle)
    x+=1

