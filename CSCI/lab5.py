# Warm-up  dice
import random
def dice():
    dice1=[1,2,3,4,5,6]
    dice2=[1,2,3,4,5,6]
    n=1
    outcomes=[0]*11
    while n<=1000:
        x=random.randint(0,5)
        y=random.randint(0,5)
        outcomes[dice1[x]+dice2[y]-2]+=1 #+=1 is the times that located in the index; -2 is because there are only 0 to 10 index in outcomes, but the range of dice1+dice2 is 2 to 12
        n+=1
    print(outcomes)


# Stretch

def main():
    x=input("Please enter a word: ", )
    m=len(x)
    n=1
    # name a list that can include the list of the wo rds
    while n<m:
        x=input("Please enter a word: ", )
        if x[0]==x[n]:
            print(# should print the list)
        n+1=n
if __name __ == '__main__':
    main()