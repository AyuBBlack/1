/* Домашка 6

- Создайте и добавьте с помощью JS между блоками one и three блок с текстом 
“dolor sit amet”;
- Добавьте для этого дива атрибут id со значением two. 
(САМОСТОЯТЕЛЬНО ИЗУЧИТЬ: setAttribute() )
- Сделайте так, чтобы при клике этот(добавленный вами) блок становился круглым 
(нужно добавить класс), а при втором клике возвращался обратно

2. На любой html-странице сделать всплывающий pop-up блок. 
(Как делали на прошлом курсе при изучении position). 
Он должен появляться при клике на какую-нибудь кнопку или блок. 
И исчезать при клике на задний черный фон (деактиватор).  
( Можете пересмотреть первый урок второго курса, чтобы освежить память)**


*/

//Задание 1.

let one = document.getElementById("one"); // получаем узел one
let three = document.getElementById("three"); // получаем узел three
let createDiv = document.createElement('div'); //Создаем тег
createDiv.innerHTML = "dolor sit amet"; // Задаем текст внутри тега
createDiv.setAttribute(`id`, `two`); //Задаем id
one.after(createDiv); // Выполяем наш CreateDiv после one
let two = document.getElementById("two");

two.addEventListener('click', change);
function change(){
    two.classList.toggle("black");
}


/* Второй вариант 
two.onclick = change;
function change() {
    two.classList.toggle("black");
} 
*/
//Задание 2

let popup = document.getElementById("myPopup");
function change_2() {
    popup.classList.toggle("show");
  }






