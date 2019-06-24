'use strict';

// -= 1 =- =====================================================================

// Получение всех пунктов меню и помещение их в новый массив в правильном порядке
let menu = document.querySelector('.menu'),
    fragment = document.createDocumentFragment(),
    menuItems = document.querySelectorAll('.menu-item');

let sortItems = [];
menuItems.forEach(function(item, i, arrItems) {
    if (item.textContent == 'Первый пункт') {
        sortItems[0] = item;
        arrItems[i].remove(item);
    } else if (item.textContent == 'Второй пункт') {
        sortItems[1] = item;
        arrItems[i].remove(item);
    } else if (item.textContent == 'Третий пункт') {
        sortItems[2] = item;
        arrItems[i].remove(item);
    } else if (item.textContent == 'Четвертый пункт') {
        sortItems[3] = item;
        arrItems[i].remove(item);
    }
});

// Создание нового пункта меню
let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
sortItems.push(newMenuItem);

// Восстановление правильного порядка меню
for (let i = 0; i < sortItems.length; i++) {
    fragment.appendChild(sortItems[i]);
}
menu.appendChild(fragment);

// -= 2 =- =====================================================================

// Замена фонового изображения
document.body.style.background = 'url(../DOM_tests/img/apple_true.jpg)';
document.body.style.backgroundSize = 'cover';

// -= 3 =- =====================================================================

// Поменять заголовок, добавить слово "подлинную"
// (Получится - "Мы продаем только подлинную технику Apple")

// Самый простой вариант:
// document.querySelector('.title').textContent = 'Мы продаем только подлинную технику Apple';

// Вариант посложнее с применением массива:
let caption = [];
caption = document.querySelector('.title').textContent.trim().split(' ');
// console.dir("Caption", caption);
for (let i = 0; i < caption.length; i++) {
    if (caption[i] == 'только') {
        caption.splice(i + 1, 0, 'подлинную');
        break;
    }
}
caption = caption.join(' ');
document.querySelector('.title').textContent = caption;

// -= 4 =- =====================================================================

// Удалить рекламу со страницы
// Рекламы на странице может быть много, поэтому удаляем все элементы с классом
// .adv
let adv = document.querySelectorAll('.adv');
for (let i = 0; i < adv.length; i++) {
    adv[i].remove();
}

// -= 5 =- =====================================================================

// Спросить у пользователя отношение к технике apple и записать ответ в блок 
// на странице с id "prompt"
while (true) {
    let question = prompt('Каково Ваше отношение к технике Apple?', '');
    // Особенность преобразования в boolean в логическом контексте if в том,
    // что все значения, которые интуитивно «пусты», становятся false: 
    // 0, пустая строка, null, undefined и NaN.
    // Остальное, в том числе и любые объекты - true.
    if(question) {
        document.getElementById('prompt').textContent = question;
        break;
    }
}


