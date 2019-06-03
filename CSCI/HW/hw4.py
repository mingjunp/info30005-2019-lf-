
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

def romanNumbers(s):
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







def rlEncode(somelist):
    n=0
    temp=0
    newList=[]
    count=1
    while n < len(somelist):
        temp=somelist[n]
        while n+1<len(somelist) and temp==somelist[n+1] :
              count=count+1
              n=n+1
        newList=newList+[temp]+[count]
        count=1
        n=n+1
    return newList


def encodeTest():
    print(rlEncode([1,2,3,5,5,5,5,5,5,6,8,8,1,1,1,5,5,12,13,14,14]))


encodeTest()


def rlDecode(somelist):
    n=0
    i=0
    newlist=[]
    temp=0
    while n<len(somelist):
        temp=somelist[n]
        while n+1<len(somelist) and i<somelist[n+1]:
            newlist+=[temp]
            i+=1
        i=0
        n+=2
    return newlist





