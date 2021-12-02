// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.innerText);


// -- замініть текст параграфа з id 'content' на будь-який інший

let contentP = document.getElementById('content').innerText = 'Telegram — багатоплатформовий клауд-месенджер з функціями VoIP для смартфонів, планшетів та ПК, який дозволяє обмінюватися текстовими, голосовими та відеоповідомленнями, наліпками та фотографіями, файлами багатьох форматів.';
console.log(contentP);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let rulesP = document.getElementById('rules').innerText = 'WhatsApp — пропрієтарний месенджер для смартфонів. Дозволяє пересилати текстові повідомлення (дописи), зображення, відео та аудіо.';
console.log(rulesP);

// -- змініть кожному елементу колір фону на червоний

let bodyElements = document.body.children;
for (const bodyElement of bodyElements) {
    bodyElement.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій

let allElements = document.querySelectorAll('*')
for (const allElement of allElements) {
    allElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesClass = document.getElementById('rules');
console.log(rulesClass.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'tomato';
}