// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let elementById = document.getElementById('main_header');
elementById.classList.add('sep-2021');

// b) робить шириниу елементу ul 400px

let elementsByTagName = document.getElementsByTagName("ul");
elementsByTagName[0].style.width = '400px'
elementsByTagName[0].style.backgroundColor = 'red'


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementsByClassName = document.getElementsByClassName('linkList');
for (const element of elementsByClassName) {
    element.style.width = '50%'
    element.style.backgroundColor = 'tomato'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let elementsByClassName1 = document.getElementsByClassName('listElement2');
console.log(elementsByClassName1);
elementsByClassName1[0].innerHTML = '<a href=""><b>Новий список</b></a>';

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElements = document.getElementsByTagName('li');
for (const li of liElements) {
    li.style.backgroundColor = 'silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let tagNameA = document.getElementsByTagName('a');
for (const a of tagNameA) {
    a.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let nameA = document.getElementsByTagName('a');
for (const a of nameA) {
    if (a.innerText ==='link3') {
        a.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let elemA = document.getElementsByTagName('a');
for (let a of elemA) {
let element_XXX = a.innerText;
a.classList.add(element_XXX)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
for (const item of subHeader) {
    item.style.backgroundColor = prompt('Choose color of background')
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

let subHeader2 = document.getElementsByClassName('sub-header');
for (let sub of subHeader2) {
  if (sub.innerText === 'content 2 segment') {
      sub.style.color = prompt('Choose color text')
  }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1');
content1[0].innerText = prompt('Введіть новий текст');

// l) отримати елементи p та змінити їм padding на 20px

let byTagNameP = document.getElementsByTagName('p');
for (let p of byTagNameP) {
    p.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2 = document.getElementsByClassName('text2');
text2[0].innerText = 'sep-2021';

