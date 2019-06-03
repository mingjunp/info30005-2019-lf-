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
#Compound Interest
n=0

def compound(startingAmount,targetAmount,interestRate):
    global n
    while(startingAmount<=targetAmount):
        startingAmount=startingAmount*(1+interestRate)
        n=n+1
        startingAmount=compound(startingAmount,targetAmount,interestRate)

    return startingAmount

compound(1000.00,10000.00,.02)

print(n)



