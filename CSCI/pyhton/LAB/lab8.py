
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