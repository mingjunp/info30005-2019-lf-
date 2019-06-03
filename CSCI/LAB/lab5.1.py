

def blackJackCal(handList):

    total=0
    i=0
    while i<len(handList):
        if handList[i] in ["T","J","Q","K"]:
            total=total+10
        elif handList[i] in ['2','3','4','5','6','7','8','9']:
            total=total+int(handList[i])
        elif handList[i] in ["A"]:
            if total+11>21:
               total=total+1
            else:
                total=total+11
        i+=1
    return total
print(blackJackCal("QA3"))


