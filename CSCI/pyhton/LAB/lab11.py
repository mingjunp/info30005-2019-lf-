

class Complex():

    def __init__(self, a=0, b=0):
        self.__a=a
        self.__b=b

    def getLeft(self):
        return self.__a

    def getRight(self):
        return self.__b

    def __add__(left, right):
        return Complex(left.getLeft() + right.getLeft(), left.getRight() + right.getRight())

    def __sub__(left, right):
      return Complex(left.getLeft() - right.getLeft(), left.getRight() - right.getRight())

    def __mul__(left,right):
        return Complex(left.getLeft() * right.getLeft() - left.getRight() * right.getRight(), left.getRight() * right.getLeft() + left.getLeft() * right.getRight() )

    def toString(self):
        return str(self.getLeft()) + ' + ' + str(self.getRight()) +'i'

def testCom():

    a=Complex(2,3)

    b=Complex(4,5)

    print((a*b).toString())


testCom()



def mandelbrot(z0,n):

    result=[]

    left=[]

    right=[]

    left.append(z0.getLeft())

    right.append(z0.getRight())

    result.append(z0.toString())


    for i in range(1,n):

        temp = z0 +   Complex(left[i-1],right[i-1]) * Complex(left[i-1],right[i-1])

        result.append(temp.toString())

        left.append(temp.getLeft())

        right.append(temp.getRight())

    return result


def test():
    c=Complex(1,1)
    a=mandelbrot(c,5)
    print(a)

test()





















