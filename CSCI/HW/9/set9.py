# A
def count_keywords():
    keywords = ['False','class','finally','is','return',
    'None','continue','for','lambda','try',
    'True','def','from','nonlocal','while',
    'and','del','global','not','with',
    'as', 'elif', 'if', 'or', 'yield',
    'assert','else','import','pass',
    'break','except','in','raise']
    file_name = input("Enter the filename:")
    f = open(file_name,'r')
    d = {}
    for line in f.readlines():
        line = line.strip()
        result = line.split(' ')
        for i in result:
            if i in keywords:
                if i not in d:
                    d[i] = 1
                else:
                    d[i] = d[i]+1

    f.close()

    print('Keyword frequency in alphabetic order:')
    print(sorted(d.items(),key=lambda item:item[0]))

# count_keywords()

# B
f = open('1.csv','r')
for line in f.readlines():
    line = line.strip().split(',')
    for i in line:
        print("%-5s" %i,end=' ')
    print()

# D
import os
def flightFilter():
    print("Airport Routing Filter")
    count = 0
    while(count<3):
        if count==0:
            filename = input("Enter the source file name:")
        else:
            filename = input("File not found. Reenter:")
        if os.path.exists(filename):
            outFilename = input("Enter the output file name:")
            if os.path.exists(outFilename):
                choice = input("File exists... overwrite? (y/n):")
            else:
                choice = 'y'
            if choice=='y':
                airport = input('Enter airport symbol:')
                airport= airport.upper()
                f = open(filename, 'r')
                outf = open(outFilename,'w')
                for line in f.readlines():
                    if airport in line:
                        outf.write(line)
                outf.close()
                f.close()
                break
            else:
                print('Finished')
                break
        else:
            count = count +1
            continue

    print("Finished")

flightFilter()

