#-------------------------------------------------------------------------------
# Name:        模块1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     26/09/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

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






