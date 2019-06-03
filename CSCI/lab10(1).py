class rational:
    def __init__(self,num=0,den=1):
        self.numerator=num
        if den == 0:
            self.denominator=1
        else:
            self.denominator=den
    def __str__(self):
        return str(self.numerator)+'/'+str(self.denominator)
num2=rational(3,1)
print(num2)

# Warm-up
class rational1:
    def __init__(self,num=0,den=1):
        self.numerator=num
        if den == 0:
            self.denominator=1
        else:
            self.denominator=den
    def __str__(self):
        if self.denominator==1:
            return str(self.numerator)
        if self.numerator==0:
            return 0
        else:
            return str(self.numerator)+'/'+str(self.denominator)

# Stretch 
class measure:
    def __init__(self,feet=0,inches=None): #1
        self.feet=feet
        self.inches=inches
        if inches==None:
            self.inches=feet
            self.feet=0
        if self.inches<12:
            self.inches=self.inches
        else:
            self.feet+=self.inches//12
            self.inches=self.inches%12        
    def __str__(self):    #2
        if self.feet==0 and self.inches==0:
            return '0"'
        if self.inches==0 and self.feet!=0:
            return str(self.feet)+"'"
        if self.feet==0 and self.inches!=0:
            return str(self.inches)+'"'
        else:
            return str(self.feet)+"'"+str(self.inches)+'"'
        
    def __add__(lefthand, righthand): #3,4
        inches=lefthand.inches+righthand.inches
        feet=lefthand.feet+righthand.feet
        return measure(feet,inches)   # call measure function   
    def __sub__(lefthand,righthand):  # transfer all feets to inches and sub, and then transfer back
        lefthand.inches=12*lefthand.feet+lefthand.inches
        righthand.inches=12*righthand.feet+righthand.inches
        inches=lefthand.inches-righthand.inches
        inches,feet=inches%12,inches//12
        return measure(feet,inches)







        
