# Warm-up (1)
def matrix(n, init):  # n is the order
    s=[]    # empty matrix
    i=0     #represent the number of rows
    while i<=n-1:
        s+=[[init]*n]  # repeat the whole first line again and again
        i+=1
    return s

# Warm-up(2)
def order(m):
    return len(m)


# Stretch (1) Identity Matrix
def identity(n):   # n is the number of rows and lines
    s=matrix(n,0)  # call the function from Warm-up(1); set all as 0 at first, and then fill 1 in the spots
    i=0  # line
    j=0   # row
    while i<=n-1:
        j=0   # set j=0 again, otherwise it would start the loop again
        while j<=n-1:
            if i==j:
                s[i][j]=1
            j+=1
        i+=1
    return s

# Stretch(2) Sparse Matrices
import random
def populate(m,n,value):   #m is matrix like Warm-up(1), n is the number of the value
    a=0
    while a<=n:
        i=random.randint(0,len(m)-1)  # len(m) should minus 1, otherwise the lise index would out of range
        j=random.randint(0,len(m)-1)

        m[i][j]=value
        a+=1
    return m
populate(matrix(4,0),6,8)
