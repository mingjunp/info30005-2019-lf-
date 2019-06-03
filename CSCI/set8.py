# A
def letterFrequency(s):
    d = {}
    for i in s:
        if i in d:
            d[i] = d[i] + 1
        else:
            d[i] = 1
    return d


def fullLetterFrequency(s):
    s = s.lower()
    s = s.replace(" ","")
    s = sorted(s,key=str.lower)
    d = letterFrequency(s)
    items = d.items()

    return items

print(fullLetterFrequency("The cow jumped over the moon"))


# B
phonebook = {'Smith, Jane':'123-4567','Doe, John':'987-6543','Baker,David':'567-8901'}

def reverseTel(phonebook):
    d = {}
    keys = phonebook.keys()
    keys = list(keys)

    values = phonebook.values()
    values = list(values)

    for i in range(len(values)):
        d[values[i]] = keys[i]

    return d

print(reverseTel(phonebook))


# C
def newFrequency(s):
    s = s.lower()
    s = s.replace(" ", "")
    s = sorted(s, key=str.lower)
    d = letterFrequency(s)

    keys = d.keys()
    keys = list(keys)
    values = d.values()
    values = list(values)
    values.sort()
    values.reverse()
    print(values)





newFrequency('The cow jumped over the moon')


# D
def phoneToNum():
    d = {'A':'2','B':'2','C':'2',
         'D':'3','E':'3','F':'3',
         'G': '4','H':'4','I':'4',
         'J': '5','K':'5','L':'5',
         'M': '6','N':'6','O':'6',
         'P': '7','Q':'7','R':'7','S':'7',
         'T': '8','U':'8','V':'8',
         'W': '9','X':'9','Y':'9','Z':'9',
         }
    a = '0123456789'
    quit = False

    while(not quit):
       num = ''
       s = input('Enter a telephone number(press enter to quit): ')
       if s=='':
           quit = True
       else:
            s = s.upper()
            for i in s:
                if i in a:
                    num = num + i
                elif i in d.keys():
                    num = num + d[i]
                else:
                    num = num
            if(len(num)!=7 and len(num)!=10):
                print('Invalid number!')
                continue
            elif len(num)==7:
                print(num[0:3] + '-' + num[3:])
            elif len(num)==10:
                print(num[0:3] + '-' + num[3:6] + '-' + num[6:])

phoneToNum()
