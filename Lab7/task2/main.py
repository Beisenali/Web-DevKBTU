from models import Vehicle, Car, Bike


def main():
    vehicle = Vehicle("Generic", "Transport", 2020)
    car = Car("Toyota", "Camry", 2022, "Petrol")
    bike = Bike("Trek", "FX 3", 2021, "City bike")

    vehicles = [vehicle, car, bike]

    for item in vehicles:
        print(item)
        print(item.start_engine())
        print(item.move())
        print("-" * 40)

    print("Extra methods:")
    print(car.honk())
    print(bike.ring_bell())


if __name__ == "__main__":
    main()