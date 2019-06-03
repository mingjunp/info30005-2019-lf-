
import random

n=float(input("Please input an integer n:"))
i=1
somelist=[]
while i<=n:
 somelist=somelist+[i]
 i=i+1

random.shuffle(somelist)
print(somelist)

def ssort(somelist):
    i=0
    j=0
    temp=0
    while i<n:
        while j<n:
             if somelist[i]<somelist[j]:
                temp=somelist[i]
                somelist[i]=somelist[j]
                somelist[j]=temp
             j=j+1
        i=i+1
        j=0
ssort(somelist)
print(somelist)