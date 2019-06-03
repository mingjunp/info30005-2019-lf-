#-------------------------------------------------------------------------------
# Name:        妯″潡1
# Purpose:
#
# Author:      JacuzziPC
#
# Created:     21/10/2016
# Copyright:   (c) JacuzziPC 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

def choose(n,k):
    if k==n or k==0:
        return 1
    else:
        return choose(n-1,k-1)+choose(n-1,k)

print(choose(3*52,2))


