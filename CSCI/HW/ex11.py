# A Vehicles
class Vehicle():
    def __init__(self, manufacturer='', numCylinder=0, owner=''):
        self.__manufacturer = manufacturer
        self.__numCylinder = numCylinder
        self.__owner = owner

    def get_manufacturer(self):
        return self.__manufacturer

    def get_numCylinder(self):
        return self.__numCylinder

    def get_owner(self):
        return self.__owner

    def set_manufacturer(self, manufacturer):
        self.__manufacturer = manufacturer

    def set_numCylinder(self, num):
        self.__numCylinder = num

    def set_owner(self, owner):
        self.__owner = owner


class Truck(Vehicle):
    def __init__(self, manufacturer='', numCylinder=0, owner='', loadCapacity=0, towingCapacity=0):
        super().__init__(manufacturer, numCylinder, owner)
        self.__loadCapacity = loadCapacity
        self.__towingCapacity = towingCapacity

    def get_loadCapacity(self):
        return self.__loadCapacity

    def get_towingCapacity(self):
        return self.__towingCapacity

    def set_loadCapacity(self, load):
        self.__loadCapacity = load

    def set_towingCapacity(self, towing):
        self.__towingCapacity = towing


def test1():
    vehicle = Vehicle()
    vehicle.set_manufacturer('benzi')
    vehicle.set_numCylinder(8)
    vehicle.set_owner('John')
    print(vehicle.get_manufacturer())
    truck = Truck()
    truck.set_owner('Jack')
    print(truck.get_owner())


test1()


# B People
class Person():
    def __init__(self, name='', address='', phone='', e_mail=''):
        self.name = name
        self.address = address
        self.phone = phone
        self.e_mail = e_mail

    def __repr__(self):
        print('Person ' + self.name)


class Student(Person):
    def __init__(self, name='', address='', phone='', e_mail='', status=''):
        super().__init__(name, address, phone, e_mail)
        self.__status = status

    def __repr__(self):
        print('Student ' + self.name)


class Employee(Person):
    def __init__(self, name='', address='', phone='', e_mail='', office='',
                 salary=0, hire_date=''):
        super().__init__(name, address, phone, e_mail)
        self.office = office
        self.salary = salary
        self.hire_date = hire_date

    def __repr__(self):
        print('Employee ' + self.name)


class Faculty(Employee):
    def __init__(self, name='', address='', phone='', e_mail='', office='',
                 salary=0, hire_date='', office_hour='', rank=''):
        super().__init__(name, address, phone, e_mail, office, salary, hire_date)
        self.__office_hour = office_hour
        self.__rank = rank

    def __repr__(self):
        print('Faculty ' + self.name)


class Staff(Employee):
    def __init__(self, name='', address='', phone='', e_mail='', office='',
                 salary=0, hire_date='', title=''):
        super().__init__(name, address, phone, e_mail, office, salary, hire_date)
        self.__title = title

    def __repr__(self):
        print('Staff ' + self.name)


def test2():
    person = Person('person')
    student = Student('student')
    employee = Employee('employee')
    faculty = Faculty('faculty')
    staff = Staff('staff')
    person.__repr__()
    student.__repr__()
    employee.__repr__()
    faculty.__repr__()
    staff.__repr__()


test2()


# C Rock - Paper - Scissors
class Tool():
    def __init__(self, strength=0, type=''):
        self.__strength = strength
        self.__type = type

    def setStrength(self, strength):
        self.__strength = strength

    def getStrength(self):
        return self.__strength

    def getType(self):
        return self.__type


class Rock(Tool):
    def __init__(self, strength):
        super().__init__(strength, 'r')

    def fight(self, tool):
        print('fight')
        if tool.getType() == 's':
            if self.getStrength() * 2 > tool.getStrength():
                return True
            else:
                return False
        elif tool.getType() == 'p':
            if self.getStrength() / 2 > tool.getStrength():
                return True
            else:
                return False


class Paper(Tool):
    def __init__(self, strength):
        super().__init__(strength, 'p')

    def fight(self, tool):
        if tool.getType() == 'r':
            if self.getStrength() * 2 > tool.getStrength():
                return True
            else:
                return False
        elif tool.getType() == 's':
            if self.getStrength() / 2 > tool.getStrength():
                return True
            else:
                 return False


class Scissors(Tool):
    def __init__(self, strength):
        super().__init__(strength, 's')

    def fight(self, tool):
        if tool.getType() == 'p':
            if self.getStrength() * 2 > tool.getStrength():
                return True
            else:
                return False
        elif tool.getType() == 'r':
            if self.getStrength() / 2 > tool.getStrength():
                return True
            else:
                return False


def test3():
    tool = Tool(1, 'r')
    rock = Rock(2)
    paper = Paper(2)
    scisscors = Scissors(2)
    print(rock.fight(paper))
    print(paper.fight(rock))
    print(rock.fight(scisscors))


test3()


# D Guessing Game
# def guessingGame(player1, player2):
#     answer = random.randint(0, 100)
#     while (True):
#         print(player1.getName() + "'s turn to guess: ", end="")
#         guess = player1.getGuess()
#         if checkForwin(player1, guess, answer):
#             return
#         print(player2.getName() + "'s turn to guess: ", end="")
#         guess = player2.getGuess()
#         if checkForwin(player2, guess, answer)
#             return
#
# def checkForWin(player,guess, answer):
#     print(player.getName(),)
#
# class Player():
#     def __init__(self, name=''):
#         self.name = name
#
#     def getName(self):
#         return self.name
#
#     def getGuess(self):
#         return 0
#
#
# class HumanPlayer(Player):
#     def __init__(self, name=''):
#         super().__init__(name)
#
#     def getGuess(self):
#         guessNum = input('Please enter a number')
#         return int(guessNum)
#
#
# import random
#
#
# class ComputerPlayer(Player):
#     def __init__(self, name=''):
#         super().__init__(name)
#
#     def getGuess(self):
#         return random.randint(0, 100)
#
#
# def test4():
