import turtle

def vowelCount(astring):
    result = [0, 0, 0, 0, 0]
    if astring =="":
        return ""

    for s in astring:
        if s == 'a':
            result[0] = result[0]+1
        if s == 'e':
            result[1] = result[1] + 1
        if s == 'i':
             result[2] = result[2] + 1
        if s == 'o':
            result[3] = result[3] + 1
        if s == 'u':
            result[4] = result[4] + 1
    return result


def pieChart(flist):
    r = 150
    sum = 0
    loopCount = 0

    turtle.hideturtle()
    turtle.speed(0)

    colors = ['red', 'yellow', 'green', 'blue', 'gray']

    if flist == "":
        turtle.done()
    if flist == [0, 0, 0, 0, 0]:
        turtle.write("no vowels in the input")
        turtle.circle(r,360)
        turtle.done()
    else:
        # get the sum
        for i in flist:
            sum = sum + int(i)

        for value in flist:
            angle = 360 * value / sum
            print(angle)

            turtle.begin_fill()
            turtle.fillcolor(colors[loopCount])

            # draw wedge
            turtle.circle(r, angle)
            turtle.left(90)
            turtle.forward(r)
            # write the letter in the middle
            if angle < 180:
                turtle.left(abs(180 - angle) + angle / 2)
            else:
                turtle.left(angle / 2 - abs(180 - angle))
            turtle.penup()
            turtle.forward(0.75 * r)
            if loopCount == 0:
                turtle.write("A")
            elif loopCount == 1:
                turtle.write("E")
            elif loopCount == 2:
                turtle.write("I")
            elif loopCount == 3:
                turtle.write("O")
            elif loopCount == 4:
                turtle.write("U")
            loopCount += 1
            turtle.left(180)
            turtle.forward(0.75 * r)
            turtle.left(180)
            if angle < 180:
                turtle.right(abs(180 - angle) + angle / 2)
            else:
                turtle.right(angle / 2 - abs(180 - angle))

            # draw the rest wedge
            turtle.pendown()
            if angle < 180:
                turtle.left(abs(180 - angle))
            else:
                turtle.right(abs(180 - angle))
            turtle.forward(r)
            turtle.left(90)
            turtle.end_fill()
            turtle.circle(r, angle)

        turtle.done()

pieChart(vowelCount(turtle.textinput("String Input Dialog", "Please input a string: ")))
    # "My mama's llama pajamas are definitely not cool, especially when worn in public"





