// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

document.getElementById('btn').onclick = function () {
    let inp1 = document.forms.form1.inp1.value;
    let inp2 = document.forms.form1.inp2.value;
    let inp3 = document.forms.form2.inp3.value;
    let inp4 = document.forms.form2.inp4.value;
    console.log(inp1, inp2, inp3, inp4)
};

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let table = document.forms.table;
table.onsubmit = function (e) {
    e.preventDefault();
    let row = table.row.value;
    let column = table.column.value;
    let text = table.text.value;
    console.log(row, column, text);

    let tableElement = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.appendChild(td);
        }

        tableElement.appendChild(tr);
    }
    document.body.appendChild(tableElement);
};

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let array = ['fick', 'back', 'shat'];
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    let word = document.getElementById('badWord').value;
    for (let item of array) {
        if (item === word) {
            alert('Щооооооо?');
        }
    }
};

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let array2 = ['fick', 'back', 'shat'];
let btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    let bad_words = document.getElementById('badWord2').value;
    for (let item of array2) {
        if (bad_words.includes(item)) {
            alert('Які слова!');
        }
    }
};