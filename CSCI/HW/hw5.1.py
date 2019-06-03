#-------------------------------------------------------------------------------
# Name:        妯″潡1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     16/10/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------
import math

def shortestDist(somelist):
    rMatrix=[]
    row_matrix=[]
    row=len(somelist)
    col=len(somelist)

    for i in range (row):
        for j in range (row):
            if i!=j:
                row_matrix+=[(math.sqrt((somelist[i][0]-somelist[j][0])**2+(somelist[i][1]-somelist[j][1])**2))]
        rMatrix.append(row_matrix)
        row_matrix=[]

    return rMatrix


def unitTest():
    print(shortestDist([[45, -99], [24, 83], [-48, -68], [-97, 99],
    [-8, -77], [-2, 50], [44, 41], [-48, -58],
    [-1, 53], [14, 86], [31, 94], [12, -91],
    [33, 50], [82, 72], [83, -90], [10, 78],
    [7, -22], [90, -88], [-21, 5], [6, 23]]))


unitTest()
