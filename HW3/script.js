// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr = [22, 34, 8.99, 4499, 0.987, 777, 'Hello', 'Addy', 'Bissy', 'Create', 'Chiko', 'Nike', true, false, 'Reebok'];
for (const arrItem of arr)
    console.log(arrItem)

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr1 = [];
arr1 [0] = 'Перший елемент';
arr1 [1] = 555;
arr1 [2] = true;
arr1 [3] = 0.23;
console.log(arr1)
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Наповнення</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Наповнення ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>Тест while</h1>`)
    i++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let index = 0;
while (index < 20) {
    document.write(`<h1>Тест while ${index}</h1>`)
    index++
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrNum = [2, 8, 958, 225, 0.25, 78, 88, 963, 4, 1265];
for (let arrElement of arrNum) {
    console.log(arrElement)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrStr = ['Ivan', 'Olya', 'Taras', 'Bobby', 'Stefani', 'Lexxy', 'Ira', 'Verona', 'Kate', 'Max'];
for (let j = 0; j < arrStr.length; j++) {
    const arrItem = arrStr[j];
    console.log(arrItem)
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrAll = [true, 98, 55, 'Vinny', 'Klev', false, 658, 55, 'Nick', 'Leo'];
for (let k = 0; k < arrAll.length; k++) {
    const arrName = arrAll[k];
    console.log(arrName)
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrDifferent = [345, 0.78, true, 'Klivland', 'Texas', false, 88, 'Nebraska', 9999, 'New Jersy'];
for (const arrDifferentTipe of arrDifferent) {
    if (typeof arrDifferentTipe === 'boolean') {
        console.log(arrDifferentTipe)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let different = [345, 0.78, true, 'Klivland', 'Texas', false, 88, 'Nebraska', 9999, 'New Jersy'];
for (const differentTipe of different) {
    if (typeof differentTipe === 'number') {
        console.log(differentTipe)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let mix = [345, 0.78, true, 'Klivland', 'Texas', false, 88, 'Nebraska', 9999, 'New Jersy'];
for (const mixTipe of mix) {
    if (typeof mixTipe === 'string') {
        console.log(mixTipe)
    }
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let array = [];
array[0] = 258;
array[1] = 'gio';
array[2] = false;
array[3] = 'Boob';
array[4] = 41.4;
array[5] = true;
array[6] = 'Caddy';
array[7] = 8888;
array[8] = 45.78;
array[9] = 'Nensi';
for (const arrayElement of array)
    console.log(arrayElement)


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j = j + 2) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let j = 0; j < 100; j++) {
    if (j % 2 === 0 & j !== 0)
        console.log(j);
    document.write(`<div>${j}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j % 3 === 0 & j !== 0)
        console.log(j);
    document.write(`<div>${j}</div>`)
}