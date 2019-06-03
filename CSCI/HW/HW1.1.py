#-------------------------------------------------------------------------------
# Name:        妯″潡1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     08/10/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------
def tranlating(s):
    if s in ['I','V','X','L','C','D','M']:
            if s=='I':
                return 1
            elif s=='V':
                return  5
            elif s=='X':
                return 10
            elif s=='L':
               return 50
            elif s=='C':
               return 100
            elif s=='D':
                return 500
            elif s=='M':
                return 1000

def tranlate(s):
    n=0
    total=0
    i=0
    while i<len(s):
        if s[i] not in ['I','V','X','L','C','D','M']:
            return 0
        i+=1
    while n<len(s):
        if n+1<len(s):
          if tranlating(s[n])>=tranlating(s[n+1]):
            total=total+tranlating(s[n])
          elif tranlating(s[n])<tranlating(s[n+1]):
            total=total-tranlating(s[n])
        else:
            total=total+tranlating(s[n])
        n+=1
    return total

print(tranlate("MCDLVIII"))
