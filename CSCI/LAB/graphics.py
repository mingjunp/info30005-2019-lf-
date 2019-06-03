import turtle
import random

class Display():
    def __init__(self):
        self.__t = turtle.Turtle()
        self.__elements = []
        self.__t.speed(0)
        self.__t.hideturtle()
        self.__scr = self.__t.getscreen()

        def mouseEvent(x, y):
            color = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']
            self.__t.penup()
            self.__t.goto(x, y)
            random.shuffle(color)
            self.__t.fillcolor(color[1])
            self.__t.begin_fill()
            self.__t.circle(random.randint(10, 100))
            self.__t.end_fill()

        self.__scr.onclick(mouseEvent)
        self.__scr.listen()

# test
# mainloop can let the turtle loop forever
display = Display()
turtle.mainloop()


