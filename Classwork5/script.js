// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNum = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
minNum (20, 150, 4);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNum = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

maxNum(150, 30, 320);

// - створити функцію яка повертає найбільше число з масиву

let arrayNums = [25, 72, 10];
let maxNumArray = (numbers) => {
    let max = numbers [0];
    for (let number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}
console.log(maxNumArray(arrayNums));

// - створити функцію яка повертає найменьше число з масиву

let arrayNums2 = [2, 68, 16];
let  maxNumArray2 = (numbers) => {
    let min = numbers [0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(maxNumArray2(arrayNums2));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrayNums3 = [1, 2, 30, 14];
let sumArrayNums3 = (elements) => {
    let result = 0;
    for (let element of elements) {
        result = result + element;
    }
    return result;
}
console.log(sumArrayNums3(arrayNums3));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrayNums4 = [10, 20, 30, 40];
let AvarageArrayNums4 = (elements) => {
    let result = sumArrayNums3(elements);
    return result / elements.length;

}
console.log(AvarageArrayNums4(arrayNums4));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let arrayNums5 = [5, 78, 31, 4];
let minMax = (nums) => {
    let min = nums[0];
    let max = nums [0];
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
}
console.log(minMax(arrayNums5));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomNums= (num) => {
    for (let i = 0; i < 5; i++) {
        num[i] = Math.round(Math.random() * 100);
    }
    return num;
}
console.log(randomNums([]));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let limitNums = (num, limit) => {
    for (let i = 0; i < 10; i++) {
        num[i] = Math.round(Math.random() * limit);
    }
    return num;
}
console.log(limitNums([], 20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArray= (arr) => {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const arrElement = arr[i];
        newArray.push(arrElement);
    }
    return newArray;
}
console.log(reverseArray([1,2,3]));