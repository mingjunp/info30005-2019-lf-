

def count(char,text):
    if text=='':
        return 0
    elif char==text[0]:
        return 1+count(char,text[1:len(text)])
    else:
        return count(char,text[1:len(text)])





def isEqual(list1, list2):
    if len(list1)==len(list2):
        if len(list1)==0:
            return True
        elif list1[0]==list2[0]:
            return isEqual(list1[1:len(list1)],list2[1:len(list2)])
        elif  list1[0]!=list2[0]:
            return False
    else:
        return False





def convertBase(n,base):
    sheet=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    if n==0:
        return ''
    else:
        return convertBase(int(n/base),base)+sheet[n%base]





