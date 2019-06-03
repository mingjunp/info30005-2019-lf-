
import random

class Card():
   def __init__(self, value= '1', suit= 'heart'):
        self.value= value
        self.suit= suit

   def getValue(self):
    return self.value

   def getSuit(self):
    return self.suit

   def __str__(self):
    return self.value+ ' ' + self.suit


class Carddeck():
    def __init__(self, deck=[]):
        self.deck=deck
        self.num=0

        for i in range(13):
            self.deck.append(Card(str(i+1), 'heart'))
            self.deck.append(Card(str(i+1), 'spade'))
            self.deck.append(Card(str(i+1), 'diamond'))
            self.deck.append(Card(str(i+1), 'club'))
        self.shuffle()

    def __repr__(self):
        s=''
        for i in range(len(self.deck)):
            s= s + self.deck[i].__str__()+ ' '
        return s

    def shuffle(self):
        random.shuffle(self.deck)

    def dealcards(self, n):
        alist=[]
        if self.num+n<=52:
            for i in range(n):
                alist.append(self.deck[self.num])
                self.num+=1
        else:
            left= 52-self.num
            need= n-(52-self.num)
            temp=[]

            for i in range(left):
                alist.append(self.deck[self.num])
                temp.append(self.deck[self.num])
                self.num+=1

            self.num=0
            self.shuffle()

            a=0
            while a<need:
                for j in range (len(temp)):
                  if self.deck[self.num].__str__()==temp[j].__str__():
                    self.num+=1
                  else:
                    alist.append(self.deck[self.num])
                    self.num+=1
                    a=a+1


        return alist


class Pokerhand():
    def __init__(self):
        self.deck=Carddeck()
        self.handList=self.deck.dealcards(5)

    def newHand(self):
        self.handList=self.deck.dealcards(5)


    def __repr__(self):
        s=''
        for i in range(5):
            s=s+self.handList[i].__str__()+' '

        return s

    def rank(self):

        def Isseq():

            check=True
            for i in range(4):
                if seq[i]+1==seq[i+1]:
                    check=check and True
                else:
                    check=check and False

            if check==True or seq==['1','10','11','12','13']:
                return True


        seq=[]
        value=[]
        suit=[]
        for i in range(5):
            seq.append(int(self.handList[i].getValue()))

            if self.handList[i].getValue() not in value:
                value.append(self.handList[i].getValue())

            if self.handList[i].getSuit() not in suit:
                suit.append(self.handList[i].getSuit())


        seq.sort()
        value.sort()


        dict={}
        for i in range(len(seq)):
           if seq[i] in dict.keys():
            dict[seq[i]]+=1
           else:
            dict[seq[i]]=1


        if len(suit)==1:
            if Isseq():
               return (8)
            else:
                return (5)

        else:
            if Isseq():
               return (4)
            else:
                if len(value)==5:
                    return(0)
                if len(value)==4:
                    return(1)
                if len(value)==3:
                    if 3 in dict.values():
                     return(3)
                    else:
                     return(2)

                if len(value)==2:
                    if 4 in dict.values():
                     return(7)
                    else:
                     return(6)





def main():

    dict={
           'Straight Flush :':0,
           'Four of a kind :':0,
           'Full house :':0,
           'Flush :':0,
           'Straight :':0,
           'Three of a kind :':0,
           'Two pair :':0,
           'One pair :':0,
           'High card :':0,
    }
    a=Pokerhand()

    for i in range(100000):
     a.newHand()
     n=a.rank()
     if n==0:
        dict['High card :']+=1
     elif n==1:
        dict['One pair :']+=1
     elif n==2:
        dict['Two pair :']+=1
     elif n==3:
        dict['Three of a kind :']+=1
     elif n==4:
        dict['Straight :']+=1
     elif n==5:
        dict['Flush :']+=1
     elif n==6:
        dict['Full house :']+=1
     elif n==7:
        dict['Four of a kind :']+=1
     elif n==8:
        dict['Straight Flush :']+=1

    dict=sorted(dict.items(),key=lambda dict:dict[1],reverse = True )
    for i in range(len(dict)):
        print(dict.pop())




