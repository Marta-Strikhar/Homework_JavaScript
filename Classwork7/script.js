//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`модель авто ${this.model}, виробник ${this.manufacturer} рік ${this.year} ємність батареї ${this.volume}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let carInfo = new car('Tesla', 'USA', 2019, 249, 100);
console.log(carInfo);
carInfo.drive();
carInfo.info();
carInfo.increaseMaxSpeed(35);
carInfo.drive();
carInfo.changeYear(2020);
carInfo.info();
carInfo.addDriver('Марко');
console.log(`Водій авто ${carInfo.driver}`);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class CarClass {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        console.log(`модель авто ${this.model}, виробник ${this.manufacturer} рік ${this.year} ємність батареї ${this.volume}`)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    }
}

let carInfo2 = new CarClass('BMW', 'Germany', 2017, 150, 70);
console.log(carInfo2);
carInfo2.drive();
carInfo2.info();
carInfo2.increaseMaxSpeed(15);
carInfo2.drive();
carInfo2.changeYear(2021);
carInfo2.info();
carInfo2.addDriver('Юрій');
console.log(`Водій авто ${carInfo2.driver}`);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let Cinderellas = [
    new Cinderella('Anna', 17, 35),
new Cinderella('Lilli', 16, 34),
new Cinderella('Christy', 19, 37),
new Cinderella('Izabella', 20, 39),
new Cinderella('Veronika', 21, 36),
new Cinderella('Viola', 18, 37),
new Cinderella('Gven', 19, 34),
new Cinderella('Ella', 22, 38),
new Cinderella('Kamilla', 16, 36),
new Cinderella('Stanni', 19, 37),
];
console.log(Cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shose) {
        this.name = name;
        this.age = age;
        this.shose = shose;
    }
}
let prince = new Prince('Ronald', 28, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let Winner = (Cinderellas, prince) => {
for (const item of Cinderellas) {
       if (item.footsize === prince.shose) {
           return `Принце ${prince.name} твоя обранниця ${item.name}`
        }
     }
 };
 console.log(Winner(Cinderellas, prince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let CinderellaWin = Cinderellas.find(value => value.footsize === prince.shose);
console.log(CinderellaWin);