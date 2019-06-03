# Warm-up 1).
def foo(n):
    if n<1:
        print('')
    else:
        print('*',end='')
        foo(n-1)
#2).
def reverseNum(n):
    if n<10:
        print(n)
    elif n>10:
        a=n%10   # get 6
        n=n//10  # from 5786 to 578
        print(a)  # print each digit and put they in line
        reverseNum(n)  #recursion
#3).
def maxValue(vals):
    if len(vals)<=1:  # the final step, the last two condition keep select the max value between the first two index in the updating list, until we get only one number left (which should be the largest one)
        return vals[0]   # the final answer is a number, not a list

    #keep comparing the first two index of the updating list by doing the following two cases
    if vals[0]<=vals[1]:  # if the second index of the updating list is bigger, exclude the first one
        vals=vals[1:]
        return maxValue(vals)
        
    if vals[0]>vals[1]:       # if the first index of the updating list is bigger, exclude the second one 
        vals=[vals[0]]+vals[2:]  # exclude vals[1] by adding vals[0] and vals[2:] together; [vals[0]] is making the first index a list, so that we can add two lists together
        return maxValue(vals)

# Stretch
# 1). Fibonacci Numbers
def fibonacci(n):
    if n==0:
        return 0
    if n==1:
        return 1
    return fibonacci(n-1)+fibonacci(n-2)

def first20Fibonacci():
    n=0
    while n<=20:
        print (fibonacci(n), end=',')
        n+=1

# 2).
import turtle
def tree(turtle,trunkLength):
    t=turtle
    if trunkLength<5:
        return
    else:
        t.forward(trunkLength)
        t.right(30)
        tree(t,trunkLength-15)
        t.left(60)
        tree(t,trunkLength-15)
        t.right(30)
        t.backward(trunkLength)



    


        

