// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userList = [
    new User(2, 'Ted', 'Jhons', 'ted@gmail.com', 30665554400),
    new User(18, 'Mark', 'Twen', 'mark@gmail.com', 30673432515),
    new User(3, 'Fergi', 'Bercks', 'berks@gmail.com', 30961141278),
    new User(55, 'Diana', 'Nerry', 'diana@ukr.net', 30503666644),
    new User(8, 'Harry', 'Kavitcki', 'harry99@gmail.com', 30930125588),
    new User(1, 'Kristina', 'Bavunska', 'kris@mail.ru', 30662251403),
    new User(63, 'Berni', 'Nits', 'berni@gmail.com', 30993665577),
    new User(22, 'Samantha', 'Gresh', 'sam@gmail.com', 30506889900),
    new User(14, 'Lilly', 'Mitter', 'lilly@gmail.com', 30673218855),
    new User(74, 'Jimmy', 'Krebs', 'jim@gmail.com', 30503391420),

];
console.log(userList);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = userList.filter(value => {
    return value.id % 2 === 0;
});
console.log(filter);


//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let sort = userList.sort((a, b) => {
    return a.id - b.id
});

console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let newArray = [
    new Client(55, 'Rex', 'Lion', 'rex@gmail.com', 30670023566, ['apple', 'cherry', 'water','sugar']),
    new Client(11, 'Kitty', 'Berry', 'kitty@gmail.com', 30506663355, ['chese', 'salt', 'kiwi']),
    new Client(28, 'Anna', 'Nutts', 'anna@gmail.com', 30675550099, ['macaroni', 'cookies']),
    new Client(40, 'Ivan', 'Demchyk', 'ivan77@gmail.com', 30503668844, ['chocolate']),
    new Client(36, 'Vadim', 'Klopotenko', 'vadim90@gmail.com', 3093557702, ['fish', 'butter']),
    new Client(87, 'Vlad', 'Moroz', 'vlad89@gmail.com', 30636665587, ['sour cream', 'milk']),
    new Client(43, 'Leonid', 'Barchuk', 'leo96@gmail.com', 30631112255, ['tomatoes']),
    new Client(9, 'Kseniya', 'Lipenko', 'ksju97@gmail.com', 30672223010, ['potato', 'raspberry']),
    new Client(68, 'Melani', 'Niox', 'mel88@gmail.com', 30996887845, ['currant', 'cream']),
    new Client(125, 'Vika', 'Rus', 'vika87@gmail.com', 30630020315, ['eags','bread']),
];
console.log(newArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort2 = newArray.sort ((ord1, ord2) => {
    return ord1.order.length - ord2.order.length
});
console.log(sort2);