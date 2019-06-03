# open(name,mode) mode:'r'-read,'w'-write,'a'-append


# Generating Synthetic Test Data
import random
def csv1000():
    filename=input('Ente the file name: ')
    fileobj=open(filename,'w')
    for i in range(1000):
        record=''
        record+=str(i+1)+','  #first value, end with','  # i+1 to make the line number start with 1  
        record+=str(random.randint(-1000,1000)) #second value
        record+='\n' # each row end 
        fileobj.write(record)  # write the data in
    fileobj.close()


# Letter Frequencies
def lettefreq():
    file=open("/home/qiuxx240/Downloads/vegan.rcp.txt",'r')
    s=file.read()
    f=0
    list1=[0]*26
    alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for letter in s:
        letter=letter.upper()
        if letter in alpha :
            f=alpha.find(letter)
            list1[f]+=1  # frequencies of each letter

    return list1
            
#workout
def earthquake():
    line=''
    alist=[]
    fname='2.5_day.csv'
    ofile=open(fname,'r')
    line=ofile.readline().strip().split(',')
    for i in range(len(line)):
       print(i,line[i],'\n')
    print(line[4]+" "+line[13])
    for fline in ofile:
        fline=fline.strip().split(',')
        alist=alist+([(float(fline[4]),fline[13][1:len(fline[13])])])
    alist.sort(key=lambda x:x[0],reverse=True)
    for i in range(len(alist)):
        print(alist[i][0],alist[i][1])
earthquake()



