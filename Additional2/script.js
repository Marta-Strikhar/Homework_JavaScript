// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let arrayFriends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (arrayFriends.length >= 3) {
    document.write('Великий масив')
} else {
    document.write('Маленький масив')
}

//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let num1 = +prompt('Введи перше число');
let num2 = +prompt('Введи друге число');
let num3 = +prompt('Введи третє число');
if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
    document.write(`<p>${num2}</p>`)
} else if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
    document.write(`<p>${num1}</p>`)
} else if (num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2) {
    document.write(`<p>${num3}</p>`)
}
//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a = +prompt('Введи число а')
let b = +prompt('Введи число b')
let result = a + b;

let messsage = (result < 4) ? 'Мало' : 'Багато'
        document.write(`<div>${messsage}</div>`)

//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let mainNum = +prompt('Введи довільне число від -100 до +100');
let check = (mainNum ===0) ? 'Нуль' :
    (mainNum < 0) ? 'Негативне число' : 'Позитивне число'
document.write(check)

