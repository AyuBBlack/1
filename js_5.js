/* Домашка 6. 
Задание 1. - пользуясь узлом `document.body` получить узлы `<b>` и `<i>`. */

let mainDiv = document.body.lastElementChild.previousElementSibling //Получаем основной DIV
let div_1 = document.body.lastElementChild.previousElementSibling.firstElementChild //Получаем первый дочерний div
let div_2 = document.body.lastElementChild.previousElementSibling.firstElementChild.nextElementSibling //Получаем 2 дочерний div
let div_3 = document.body.lastElementChild.previousElementSibling.lastElementChild //Получаем последний дочерний div

let b = div_1.firstElementChild // Получаем тег b
let i = div_2.firstElementChild // Получаем тег i

console.log(i);

// Задание 2. - заменить фон документа на черный, а цвет текста на белый.

let body = document.body

body.style.background = "black"; 
body.style.color = "white";

//Задание 3. - удалить курсивный текст со страницы.

i.remove();

//Задание 4. - *добавить новый подчеркнутый текст рядом с курсивным текстом.

let AppBteg = document.createElement('u')
AppBteg.innerHTML = "подчеркнутый текст";
div_1.append(AppBteg);
console.log(div_1);

//Задание 5. 

