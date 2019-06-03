#-------------------------------------------------------------------------------
# Name:        婵☆垪鈧櫕鍋?
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     14/10/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

#Stretch 1
def identity(n):
     matrix=[]
     row=[]
     for i in range(n):
        for j in range(n):
            if i==j:
                row.append(1)
            else:
                row.append(0)
        matrix+=[row]
        row=[]
     return matrix

print(identity(3))
#Stretch 2
def populate(m,n,value):
    import random
    row=len(m)-1
    col=len(m[0])-1
    for i in range(n):
        m[random.randint(0,row)][random.randint(0,col)]=value
    return m

a=[[0, 0 ,0], [0, 0 ,0] ,[0, 0 ,0]]
print(populate(a,3,1))

#workout
import turtle
def showMatrix(turtle_object, m):
    row=len(m)
    col=len(m[0])
    screen = turtle.getscreen()
    screen.setworldcoordinates(0,0,row+1,col+1)
    screen.tracer(0)
    for i in range(row):
        for j in range(col):
          turtle_object.penup()
          if m[i][j]!=0:
           turtle_object.goto(i,j)
           turtle_object.dot()
    screen.update()

showMatrix(turtle,populate(identity(50),500,1))


