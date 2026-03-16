class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model} engine started."

    def move(self):
        return f"{self.brand} {self.model} is moving."

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model}, Year: {self.year}"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def move(self):
        return f"Car {self.brand} {self.model} is driving on the road."

    def honk(self):
        return f"{self.brand} {self.model} says: Beep beep!"

    def __str__(self):
        return (
            f"Car: {self.brand} {self.model}, "
            f"Year: {self.year}, Fuel type: {self.fuel_type}"
        )


class Bike(Vehicle):
    def __init__(self, brand, model, year, bike_type):
        super().__init__(brand, model, year)
        self.bike_type = bike_type

    def move(self):
        return f"Bike {self.brand} {self.model} is being pedaled forward."

    def ring_bell(self):
        return f"{self.brand} {self.model} says: Ring ring!"

    def __str__(self):
        return (
            f"Bike: {self.brand} {self.model}, "
            f"Year: {self.year}, Type: {self.bike_type}"
        )