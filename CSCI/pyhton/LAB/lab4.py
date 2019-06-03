#-------------------------------------------------------------------------------
# Name:        模块1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     30/09/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

def mul(a,b):
    i=0
    sum=0
    if a<=b:
        n=a
    else:
        n=b
        b=a

    while i<n:
        sum+=b
        i+=1
    return sum

print(mul(3,3))


def emul(a,b):
    sign=0
    if (a>=0 and b>=0) or(a<=0 and b<=0):
        sign=1
    else:
        sign=-1

    a=abs(a)
    b=abs(b)
    sum=0
    while b!=0:
        if b%2!=0:
            sum+=a
        a*=2
        b=int(b/2)

    return sum*sign


print(emul(-22,-17))



