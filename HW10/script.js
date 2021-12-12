// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

let btn = document.getElementById('btn');
let hideElement = true;
btn.onclick = function () {
    if (hideElement) {
        document.getElementById('text').style.display = 'none';
    } else {
        document.getElementById('text').style.display = 'block';
    }

    hideElement = !hideElement;
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//

let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    document.getElementById('btn2').style.display = 'none'

}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let form = document.forms.checkAge
form.onsubmit = function (e) {
    e.preventDefault()
    if (+this.userAge.value < 18) {
        alert('Вам ще немає 18 років')
    } else {
        console.log(+this.userAge.value)
    }
};

// - Создайте меню, которое раскрывается/сворачивается при клике
//

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    console.log(this.children);
    for (let element of this.children) {
        element.classList.toggle('hide')
    }
};


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let coments = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'}
]
for (const coment of coments) {
    let divElement = document.createElement('div');
    divElement.classList.add('coment')
    let headingElement = document.createElement('h1');
    headingElement.innerText = coment.title;
    let bodyComent = document.createElement('div');
    bodyComent.innerText = coment.body;
    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'Приховати дані'
    buttonElement.onclick = function () {
        bodyComent.classList.toggle('hideBody')
    };
    divElement.append(headingElement,bodyComent, buttonElement);
    document.body.appendChild(divElement);
}