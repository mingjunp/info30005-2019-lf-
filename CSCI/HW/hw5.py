
import math

def shortestDist(somelist):
    rMatrix=[]
    row_matrix=[]
    row=len(somelist)
    col=len(somelist)

    for i in range (row):
        for j in range (row):
            if i!=j:
                row_matrix+=[(math.sqrt((somelist[i][0]-somelist[j][0])**2+(somelist[i][1]-somelist[j][1])**2))]
        rMatrix.append(row_matrix)
        row_matrix=[]

    return rMatrix


def unitTest():
    print(shortestDist([[45, -99], [24, 83], [-48, -68], [-97, 99],
    [-8, -77], [-2, 50], [44, 41], [-48, -58],
    [-1, 53], [14, 86], [31, 94], [12, -91],
    [33, 50], [82, 72], [83, -90], [10, 78],
    [7, -22], [90, -88], [-21, 5], [6, 23]]))


unitTest()




def gameState(somelist):
    win_states=[
    [0,0,0,1,0,2],[1,0,1,1,1,2],
    [2,0,2,1,2,2],[0,0,1,0,2,0],
    [0,1,1,1,2,1],[0,2,1,2,2,2],
    [0,0,1,1,2,2],[0,2,1,1,2,0]
    ]

    for i in range (8):
        a= somelist[win_states[i][0]][win_states[i][1]]
        b= somelist[win_states[i][2]][win_states[i][3]]
        c= somelist[win_states[i][4]][win_states[i][5]]
        if a!='' and b!='' and c!='':
            if a==b and b==c and a==c:
                if a=='X':
                    return 'X'
                elif a=='O':
                    return 'O'

    for j in range (3):
        for k in range (3):
            if(somelist[j][k]==''):
                return ''

    return 'D'

def testTTT():
    state=gameState([['X', '', 'O'], ['X', 'O', ''], ['X', '', 'O']])
    state=gameState([['O', '', 'X'], ['X', 'O', ''], ['X', '', 'O']])
    state=gameState([['O', 'X', 'O'], ['X', 'X', 'O'], ['X', 'O', 'X']])
    state=gameState([['', 'X', 'O'], ['X', 'O', ''], ['X', '', 'O']])
    if state=='X':
        print("X wins")
    elif state=='O':
        print("O wins")
    elif state=='D':
        print("Draw")
    elif state=='':
        print("No Win, No Draw")

testTTT()

