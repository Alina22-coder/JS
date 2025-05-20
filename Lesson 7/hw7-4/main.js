// #5kla3yMpgp
class Car {
    constructor(model, producer, yearOfRelease, maximumSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfRelease = yearOfRelease;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;

        this.drive = function (){
            return `їдемо зі швидкістю ${maximumSpeed} на годину`;
        }
        this.info = function (){
            return `model - ${model}, producer - ${producer}, yearOfRelease - ${yearOfRelease}, maximumSpeed - ${maximumSpeed}, engineCapacity - ${engineCapacity} `;
        }
        this.increaseMaxSpeed = function (newSpeed) {
            return this.maximumSpeed * newSpeed
        }
        this.changeYear = function (newValue) {
            return this.yearOfRelease = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

let car2 = new Car ('Model S', 'Tesla', 2022, 250,  2.0);

console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(20));
console.log(car2.changeYear(2000));

const driver2={
    name: "Олександр",
    age: 35,
    license: true,
    experience: "10 років"
}
car2.addDriver(driver2);
console.log(car2);






