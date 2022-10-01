class Vehicle {
    constructor(type, build_location, model, year, color) {
        this.type = type
        this.build_location = build_location
        this.model = model
        this.year = year
        this.color = color
    }

    getYear() {
        return this.year
    }

    getColor() {
        return this.color
    }

    getModel() {
        return this.model
    }

    numberOfPassengers() {
        switch(this.type) {
            case 'car': 
                return 5
            case 'truck': 
                return 2
            case 'SUV':
                return 5
            default:
                return 'Vehicle type is invalid'
        }
    }

    numberOfWheels() {
        switch(this.type) {
            case 'car': 
                return 4
            case 'truck': 
                return 6
            case 'SUV':
                return 4
            default:
                return 'Vehicle type is invalid'
        }
    }

    age(currentYear) {
        return Number(currentYear) - Number(this.year)
    }
}

car1 = new Vehicle('car', 'Miami', 'civic', '2022', 'black')
console.log(car1)
console.log(car1.getYear())
console.log(car1.getColor())
console.log(car1.getModel())
console.log(car1.numberOfPassengers())
console.log(car1.numberOfWheels())
console.log(car1.age(2022))



