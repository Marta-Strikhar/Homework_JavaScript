// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let array1 = 'hello world';
let array2 = 'lorem ipsum';
let array3 = 'javascript is cool';
console.log(array1.length);
console.log(array2.length);
console.log(array3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = array1.toUpperCase();
let toUpperCase2 = array2.toUpperCase();
let toUpperCase3 = array3.toUpperCase();
console.log(toUpperCase1);
console.log(toUpperCase2);
console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

toLowerCase1 = toUpperCase1.toLowerCase();
toLowerCase2 = toUpperCase2.toLowerCase();
toLowerCase3 = toUpperCase3.toLowerCase();
console.log(toLowerCase1);
console.log(toLowerCase2);
console.log(toLowerCase3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str1 = 'Каждый охотник желает знать';

function stringToarray(str) {
    return str.split(' ');
}

console.log(stringToarray(str1));
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

function delete_characters(str, length) {
    return str1.substr(0, length);
}

console.log(delete_characters(str, 7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

function insert_dash(arg) {
    return arg.replaceAll(' ', '-').toUpperCase();
}

console.log(insert_dash(str2));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let arrayStr = 'hello world';
function transformer (str) {
    return str [0].toUpperCase() + arrayStr.substring(1)
}
console.log(transformer(arrayStr));



//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(str) {
    return str.split (' ').map(word =>word[0].toUpperCase()+word.substring(1)).join(' ')
}
console.log(capitalize(arrayStr));