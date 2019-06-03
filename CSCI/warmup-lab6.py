#-------------------------------------------------------------------------------
# Name:        模块3
# Purpose:
#
# Author:      forev
#
# Created:     12/10/2017
# Copyright:   (c) forev 2017
# Licence:     <your licence>
#-------------------------------------------------------------------------------

def matrix(n, init):
    s=[]
    i=0
    while i<=n-1:
        s+=[[init]*n]
        i+=1
    return s
print(matrix(4,2))

# Warm-up(2)
def order(m):
    return len(m)
m=[2,2,2],[2,2,2],[2,2,2]
print(order(m))
