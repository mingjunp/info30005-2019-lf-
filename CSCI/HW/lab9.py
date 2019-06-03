
def main():
    keyword_list = ["False", "class", "finally", "is", "return", "None", "continue",
    "for", "lambda", "try", "True", "def", "from", "nonlocal", "while", "and",
    "del", "global", "not", "with", "as", "elif", "if", "or", "yield", "assert",
    "else", "import", "pass", "break", "except", "in", "raise"]

    fname=input("Please input the file name:")

    ofile=open(fname,'r')

    temp=''
    dict={}
    for i in range(len(keyword_list)):
        dict[keyword_list[i]]=0

    for line in ofile:
      line=line.strip('\n')
      for i in range(len(line)):
        if line!='':
            if line[i]==' ':
                if temp in dict.keys():
                    dict[temp]+=1

                temp=''
            else:
                temp+=line[i]

        else:
            temp=''


    ofile.close()

    for i in range(len(sorted(dict))):
        if dict[sorted(dict)[i]]!=0:
         print(sorted(dict)[i],dict[sorted(dict)[i]])


main()

