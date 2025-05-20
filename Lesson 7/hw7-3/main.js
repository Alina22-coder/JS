// #vV9a6584I5
function Car (model, producer, yearOfRelease, maximumSpeed, engineCapacity) {
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

let car1 = new Car ('Model S', 'Tesla', 2022, 250,  2.0);

console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(12));
console.log(car1.changeYear(20));


const driver1={
    name: "Олександр",
    age: 35,
    license: true,
    experience: "10 років"
}

car1.addDriver(driver1);
console.log(car1.driver);
console.log(car1);




