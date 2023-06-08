class Cars {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    getDescription(){
        return `${this.make} and model ${this.model} of the year ${this.year}`
    }
}
class ElectricCars extends Cars {
    constructor(make, model, year, range){
        super(make, model, year)
        this.range = range
    }
    getDescription(){
        return `${this.make} and model ${this.model} of the year ${this.year} and a range of ${this.range}`
    }
}
const teslaModelS = new ElectricCars('Tesla', 'Model S', 2019, 300)
const teslaModelX = new ElectricCars('Tesla', 'Model X', 2020, 400)
const elantra = new Cars('Hyundai', 'Elantra', 2021)
