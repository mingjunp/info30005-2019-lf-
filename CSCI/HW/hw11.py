class Vehicle():
    def __init__(self,Make='',Model='',Year='',Mileage='',Price=''):
        self.__Make = Make
        self.__Model = Model
        self.__Year = Year
        self.__Mileage = Mileage
        self.__Price = Price

    def getMake(self):
        return self.__Make
    def setMake(self,Make):
        self.__Make=Make
    def getModel(self):
        return self.__Model
    def setModel(self,Model):
        self.__Model=Model
    def getYear(self):
        return self.__Year
    def setYear(self,Year):
        self.__Year=Year
    def getMileage(self):
        return self.__Mileage
    def setMileage(self,Mileage):
        self.__Mileage=Mileage
    def getPrice(self):
        return self.__Price
    def setPrice(self,Price):
        self.__Price=Price
    def Display(self):
        print('Make: ',self.__Make)
        print('Year: ',self.__Year)
        print('Model: ',self.__Model)
        print('Miles: ',self.__Mileage)
        print('Price: ',self.__Price)

class Car(Vehicle):
    def __init__(self):
        super().__init__()
        self.__numOfDoor = ''
    def getNumOfDoor(self):
        return self.__numOfDoor
    def setNumOfDoor(self,num):
        self.__numOfDoor=num
    def Display(self):
        super().Display()
        print('Number of doors: ',self.__numOfDoor)

class Truck(Vehicle):
    def __init__(self):
        super().__init__()
        self.__driveType=''
    def getDriveType(self):
        return self.__driveType
    def setDriveType(self,DriveType):
        self.__driveType=DriveType
    def Display(self):
        super().Display()
        print('Drive type: ',self.__driveType)

class SUV(Vehicle):
    def __init__(self):
        super().__init__()
        self.__passengerCap =''
    def getPassengerCapacity(self):
        return self.__passengerCap
    def setPassengerCapacity(self,PassCap):
        self.__passengerCap=PassCap
    def Display(self):
        super().Display()
        print('Passenger Capacity: ',self.__passengerCap)

class Inventory():
    def __init__(self):
        self.alist=[]
    def addVehicle(self,vehicle):
        self.alist.append(vehicle)
    def Display(self):
        for i in range(len(self.alist)):
            self.alist[i].Display()
            print("")

def main():
    inventory=Inventory()
    vehicle=input('Please input a vehicle type: ')

    if vehicle=='car':
        car=Car()
        car.setMake(input("Make: "))
        car.setModel(input("Model: "))
        car.setYear(input('Year: '))
        car.setMileage(input("Mileage: "))
        car.setPrice(input("Price: "))
        car.setNumOfDoor(input("Number of doors: "))
        inventory.addVehicle(car)


    elif vehicle=='truck':
        truck=Truck()
        truck.setMake(input("Make: "))
        truck.setModel(input("Model: "))
        truck.setYear(input('Year: '))
        truck.setMileage(input("Mileage: "))
        truck.setPrice(input("Price: "))
        truck.setDriveType(input("Drive type: "))
        inventory.addVehicle(truck)


    elif vehicle=='SUV':
        suv=SUV()
        suv.setMake(input("Make: "))
        suv.setModel(input("Model: "))
        suv.setYear(input('Year: '))
        suv.setMileage(input("Mileage: "))
        suv.setPrice(input("Price: "))
        suv.setPassengerCapacity(input("Passenger Capcity: "))
        inventory.addVehicle(suv)

    inventory.Display()


main()















