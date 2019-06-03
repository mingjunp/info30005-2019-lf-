# D Guessing Game

import random


def checkForWin(player, guess, answer):
    print(player.getName(), "guesses", guess)
    if answer == guess:
        print("You're right! You win!")
        return True
    elif answer < guess:
        player.getResult('high', guess)
        print("Your guess is too high.")
    else:
        player.getResult('low', guess)
        print("Your guess is too low.")
    return


def guessingGame(player1, player2):
    answer = random.randint(0, 100)
    while (True):
        print(player1.getName() + "'s turn to guess: ", end="")
        guess = player1.getGuess()
        if checkForWin(player1, guess, answer):
            return
        print(player2.getName() + "'s turn to guess: ", end="")
        guess = player2.getGuess()
        if checkForWin(player2, guess, answer):
            return


class Player():
    def __init__(self, name=''):
        self.name = name

    def getName(self):
        return self.name

    def getGuess(self):
        return 0

    def getResult(self, result, guess):
        if result == 'low':
            pass
        elif result == 'high':
            pass


class HumanPlayer(Player):
    def __init__(self, name=''):
        super().__init__(name)

    def getGuess(self):
        guessNum = input('Please enter a number')
        return int(guessNum)


class ComputerPlayer(Player):
    def __init__(self, name=''):
        super().__init__(name)
        self.__start = 0
        self.__end = 100

    def getGuess(self):
        return random.randint(self.__start, self.__end)

    def getResult(self, result, guess):
        if result == 'low':
            self.__start = guess
        elif result == 'high':
            self.__end = guess


def test4():
    human1 = HumanPlayer('Human_Jojo')
    human2 = HumanPlayer('Human_Jack')
    computer1 = ComputerPlayer('Computer_John')
    computer2 = ComputerPlayer('Computer_Json')
    # guessingGame(human1, human2)
    # guessingGame(human1, computer1)
    guessingGame(computer1, computer2)


test4()
