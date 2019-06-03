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

import math
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