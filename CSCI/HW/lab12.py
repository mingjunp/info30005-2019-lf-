
class plus():
    def __init__(self, a=0, b=0):
        self.a=a
        self.b=b

    def __add__(self,Plus):
        return self.a + Plus.a


def main():
    a= plus(1,2)
    b= plus(2,3)
    print(a+b)

main()


