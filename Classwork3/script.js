// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    let arrItem = arr [i];
    console.log(arrItem);
    i++;
}


//     2. перебрати його циклом for

for (let j = 0; j < arr.length; j++) {
    let arrElement = arr[j];
    console.log(arrElement)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < arr.length) {
    if (k % 2 == 1)
        console.log(arr[k]);
    k++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let m = 0; m < arr.length; m++) {
    let arrElem = arr[m];
    if (m % 2 == 1)
        console.log(arrElem)
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let l = 0;
while (l < arr.length) {
    if (l % 2 === 0)
        console.log(arr[l]);
    l++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let n = 0; n < arr.length; n++) {
    let arrElem = arr[n];
    if (n % 2 === 0)
        console.log(arrElem)
}

// 7. замінити кожне число кратне 3 на слово "okten"

v = 0;
while (v < arr.length) {
    let element = arr [v];{
        if (element % 3 === 0){
            element = 'okten'
        }
    }
    console.log(element)
    v++;
}



// 8. вивести масив в зворотньому порядку.

for (let x = arr.length -1; x >= 0; x --) {
    let arrEl = arr[x];
    console.log(arrEl)
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let it = arr.length -1;
while (it >= 0) {
    let arrItem = arr [it];
    console.log(arrItem);
    it--;
}
// ___________________________________________________________________________________

for (let jt = arr.length-1; jt >=0; jt--) {
    let arrElement = arr[jt];
    console.log(arrElement)
}
// ___________________________________________________________________________________
let kt = arr.length -1;
while (kt >= 0) {
    if (kt % 2 == 1)
        console.log(arr[kt]);
    kt--;
}
// ___________________________________________________________________________________
for (let mt = arr.length -1; mt >=0; mt--) {
    let arrElem = arr[mt];
    if (mt % 2 == 1)
        console.log(arrElem)
}
// ___________________________________________________________________________________
let lt = arr.length -1;
while (lt >=0) {
    if (lt % 2 === 0)
        console.log(arr[lt]);
    lt--;
}
// ___________________________________________________________________________________
for (let nt = arr.length-1; nt >=0; nt--) {
    let arrElem = arr[nt];
    if (nt % 2 === 0)
        console.log(arrElem)
}
// ___________________________________________________________________________________
vt = arr.length -1;
while (vt >=0) {
    let element = arr [vt];{
        if (element % 3 === 0){
            element = 'okten'
        }
    }
    console.log(element)
    vt--;
}