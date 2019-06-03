class Vehicle():
    def __init__(self, make='', model='', year='', mileage='', price=''):
        self.__make = make
        self.__model = model
        self.__year = year
        self.__mileage = mileage
        self.__price = price

    def get_make(self):
        return self.__make

    def get_model(self):
        return self.__model

    def get_year(self):
        return self.__year

    def get_mileage(self):
        return self.__mileage

    def get_price(self):
        return self.__price

    def set_make(self, make):
        self.__make = make

    def set_model(self, model):
        self.__model = model

    def set_year(self, year):
        self.__year = year

    def set_mileage(self, mileage):
        self.__mileage = mileage

    def set_price(self, price):
        self.__price = price

    def Display(self):
        print('Make: ' + self.__make)
        print('Year: ' + self.__year)
        print('Model: ' + self.__model)
        print('Miles: ' + self.__mileage)
        print('Price: ' + self.__price)


class Car(Vehicle):
    def __init__(self, make='', model='', year='', mileage='', price='', doors=''):
        super().__init__(make, model, year, mileage, price)
        self.__doors = doors

    def get_doors(self):
        return self.__doors

    def set_doors(self, doors):
        self.__doors = doors

    def Display(self):
        super().Display()
        print('Number of doors: ' + self.__doors)


class Truck(Vehicle):
    def __init__(self, make='', model='', year='', mileage='', price='', driveType=''):
        super().__init__(make, model, year, mileage, price)
        self.__driveType = driveType

    def get_driveType(self):
        return self.__driveType

    def set_driveType(self, type):
        self.__driveType = type

    def Display(self):
        super().Display()
        print('Drive type: ' + self.__driveType)


class SUV(Vehicle):
    def __init__(self, make='', model='', year='', mileage='', price='', capacity=''):
        super().__init__(make, model, year, mileage, price)
        self.__capacity = capacity

    def get_capacity(self):
        return self.__capacity

    def set_capacity(self, capacity):
        self.__capacity = capacity

    def Display(self):
        super().Display()
        print('Passenger Capacity: ' + self.__capacity)


class Inventory():
    def __init__(self, vehicle=[]):
        self.__vehicle = vehicle

    def addVehicle(self, vehicle):
        self.__vehicle.append(vehicle)

    def Display(self):
        for vehicle in self.__vehicle:
            vehicle.Display()
            print()
            print()


def main():
    inventory = Inventory()
    quit = False
    while not quit:
        type = input('Please input the vehicle type: ')
        if type == '':
            quit = True
            break
        make = input('Please input the make: ')
        model = input('Please input the model:')
        year = input('Please input the year: ')
        miles = input('Please input the miles:')
        price = input('Please input the price: ')
        if type == 'car':
            doors = input('Please input the numbers of doors: ')
            car = Car(make, model, year, miles, price, doors)
            inventory.addVehicle(car)
        elif type == 'truck':
            driveType = input('Please input the drive type: ')
            truck = Truck(make, model, year, miles, price, driveType)
            inventory.addVehicle(truck)
        elif type == 'SUV':
            capacity = input('Please input the capacity: ')
            suv = SUV(make, model, year, miles, price, capacity)
            inventory.addVehicle(suv)

    inventory.Display()


if __name__ == '__main__':
    main()
