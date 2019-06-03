##name:Jiapeng Tong

##part A
def reverseAssoc(old):
    dict={}
    for i in range(len(old.keys())):
        dict[old[list(old.keys())[i]]]=list(old.keys())[i]
    return dict

myfriends = {'Jones,Susan':'480.345.2248', 'Smith,Alex':'480.229.9428'}


##part B

def getNumber():
    dict={'A':'2','B':'2','C':'2','D':'3','E':'3','F':'3','G':'4','H':'4','I':'4','J':'5','K':'5','L':'5',
          'M':'6','N':'6','O':'6','P':'7','Q':'7','R':'7','S':'7','T':'8','U':'8','V':'8','W':'9','X':'9','Y':'9','Z':'9'}
    num=['0','1','2','3','4','5','6','7','8','9']
    phone=input("Enter a telephone number:")
    digit=0
    newphone=''
    while phone!='':
         phone=phone.upper()
         for i in range(len(phone)):
            if phone[i] in dict.keys():
                newphone=newphone+dict[phone[i]]
                digit+=1
            elif phone[i] in num:
                newphone=newphone+phone[i]
                digit+=1

         if digit==7 or digit==10:
            if digit ==7:
              newphone=newphone[0:3]+'-'+newphone[3:7]
            else:
             newphone=newphone[0:3]+'-'+newphone[3:6]+'-'+newphone[6:10]

            print('Numeric telephone number is:',newphone)

         else:
            print('Invalid number!')
            digit=0

         phone=input("Enter a telephone number:")





