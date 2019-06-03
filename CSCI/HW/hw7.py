from os import path

def main():
    n=0
    fname=input("Airport Routing Filter\nEnter the source file name:")

    while n<3:

     if path.isfile(fname):
          ffile=open(fname,'r')

          ofname=input("Enter the output file name:")

          if path.isfile(ofname+'.dat'):
            response=input("File exists... overwrite? (y/n):")

            if response.lower()=='y':

                ofile=open(ofname+'.dat','w')

                airport=input("Enter airport symbol:").lower()

                for line in ffile:
                 nline=line.strip().split(',')

                 if nline[2].lower()==airport or nline[4].lower()==airport:
                    ofile.write(line)

                ffile.close()
                ofile.close()
                print("Finished")
                n=3
            else:
                n+=1
          else:
              ofile=open(ofname+'.dat','w')

              airport=input("Enter airport symbol:").lower()

              for line in ffile:
                nline=line.strip().split(',')
                if nline[2].lower()==airport or nline[4].lower()==airport:
                    ofile.write(line)

              ffile.close()
              ofile.close()
              print("Finished")
              n=3

     else:
        fname=input("File not found. Reenter:")
        n+=1
