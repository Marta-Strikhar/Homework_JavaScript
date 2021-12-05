// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'


// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function normalizeName (name) {
    return name
        .replaceAll ('..', ' ')
        .replaceAll ('---', ' ')
        .replaceAll ('__', ' ')
}
console.log(normalizeName(n1));
console.log(normalizeName(n2));
console.log(normalizeName(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function randomeNums (nums) {
    let arrayNums = [];
    for (let i = 0; i < nums; i++) {
       arrayNums.push(Math.round(Math.random()*100));
    }
    return arrayNums;
}
let result = randomeNums(5,100);
console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

result.sort ((x, y) => x-y);
console.log(result);
result.sort ((x, y) => y-x);
console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arrayNew = [2, 7, 24, 78, 19, 157];
let result2 = arrayNew.filter(num => num %2 ===0);
console.log(result2);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let array = (length, num) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.round(Math.random() * num));
    }
    return newArray.map(value => value.toString());
};
console.log(array(5, 100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

function sortNums (numbers, direction) {
    let sortedArray = [];
    if (direction === 'ascending') {
        sortedArray = numbers.sort((a, b) => a-b);
    } else if (direction === 'descending') {
        sortedArray = numbers.sort((a, b) => b-a);
    }
    return sortedArray;
}
console.log(sortNums([3,11,21], 'ascending'));

//
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let arrSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(arrSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let arrFilter = coursesAndDurationArray.filter(value => value.monthDuration >5);
console.log(arrFilter);