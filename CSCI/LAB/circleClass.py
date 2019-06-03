import turtle
class Shape():
    def __init__(self, x=0, y=0, color='', filled=False):
        self.__x = x
        self.__y = y
        self.color = color
        self.__filled = filled
    def setFillcolor(self,str):
        self.color = str
        self.__filled = True
    def setFilled(self,bool):
        self.__filled = bool
    def isFilled(self):
        return self.__filled


class Circle(Shape):
    def __init__(self, x=0, y=0, radius=1):
        super().__init__(x,y)
        self.__x = x
        self.__y = y
        self.__radius = radius

    def draw(self,t):
        t.penup()
        t.goto(self.__x,self.__y)
        t.pendown()
        if super().isFilled():
            print(super().isFilled())
            t.begin_fill()
            t.fillcolor(self.color)
            t.circle(self.__radius)
            t.end_fill()
        else:
            t.circle(self.__radius)

# test
circle = Circle(10,10,100)
circle.setFillcolor('red')
circle.draw(turtle)
turtle.done()