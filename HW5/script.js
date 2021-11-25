// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let square = (a, b) => {
    return a * b;
}
console.log( square(5,10))


// - створити функцію яка обчислює та повертає площу кола

let  radius = (r) => {
    return Math.PI * Math.pow(r, 2);
}
console.log(radius(2))


// - створити функцію яка обчислює та повертає площу циліндру

let cylinder = (h, r) => {
   return 2 * Math.PI * r * h;
}
console.log(cylinder(15, 7))

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = ['black', 'red', 'white']
let createArray = (array) => {
   i = 0;
   while (i < array.length) {
       console.log(array[i])
       i++;
   }
}
createArray(array)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createPar = (arg) => {
    document.write(`<p>${arg}</p>`)
}

createPar('Сьогодні');
createPar('був');
createPar('гарний');
createPar('день');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
createUl('Sunrise')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUlLi = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUlLi('Вийшло', 20)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let elements = ['Скрипт', true, 225, false];
let createElements = (el) => {
    document.write(`<ul>`);
    let k = 0;
    while (k < 5) {
        document.write(`<li>${el}</li>`)
        k++
    }
    document.write(`</ul>`);
}
createElements (elements)

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = [{id: 1, name: 'Olya', age: 33}, {id: 2, name: 'Vova', age: 27}, {id: 3, name: 'Taras', age: 35}];
let createObject = (obj) => {
    for (item of object) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age} </div>`)
    }
}
createObject(object)