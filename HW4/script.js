// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    let squareResult = a * b;
    return squareResult;
}

let result = square(5, 10);
console.log(result)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function radius(r) {
    let radiusResult = Math.PI * Math.pow(r, 2);
    return radiusResult;
}

let resultRad = radius(2);
console.log(resultRad)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    let cylinderResult = 2 * Math.PI * r * h;
    return cylinderResult;
}

let resultCyl = cylinder(15, 7);
console.log(resultCyl)

// - створити функцію яка приймає масив та виводить кожен його елемент

function CreateArray(arg) {
    for (let element of arg) {
        console.log(element);
    }
}

CreateArray(['red', 'black', 'white'])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createPar(arg) {
    document.write(`<p>${arg}</p>`)
}

createPar('Сьогодні');
createPar('був');
createPar('гарний');
createPar('день');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createUl('Sunrise')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlLi(text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createUlLi('Вийшло', 100)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createElements(arg) {
    document.write(`<ul>`);
    let k = 0;
    while (k < 5) {
        document.write(`<li>${arg}</li>`)
        k++
    }

    document.write(`</ul>`);
}

createElements(['Скрипт', true, 225, false])
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createObject(object) {
    for (item of object) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age} </div>`)

    }
}

createObject([{id: 1, name: 'Olya', age: 33}, {id: 2, name: 'Vova', age: 27}, {id: 3, name: 'Taras', age: 35}])