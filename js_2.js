// Домашка №3.
// 1. Создать и вызвать функцию, которая выводит алерт с текстом “Привет, Мир”.

function HelloWorld()
{
    alert("Привет, Мир!");
}

HelloWorld();


//2. Создать функцию, которая принимает число и выводит в алерт это число разделенное на два.


function inside(num)
{
    let a = num/2;
    alert(a);
}

inside(10);

//3.Создать функцию, которая ВОЗВРАЩАЕТ текст “JavaScript”. Вывести его в консоль

function ret()
{
    return ('JavaScript');
}
console.log (ret());

//4.Написать функцию, которая принимает два параметра и возвращает их сумму.

function sum(num_1, num_2)
{
    return (num_1+num_2);
}
console.log(sum(10,15));

//5.Создать функцию, которая принимает два параметра (в них будут передаваться числа). Вернуть большее из двух чисел.
function sum2(n1, n2)
{
    if(n1<n2){
        return(n2);
    }
    else{
        return(n1);
    }
}

console.log(sum2(10,15));

/*6. Написать функцию, которая в первом параметре принимает текст, 
во втором принимает число и возвращает указанное во втором параметре количество символов. 
Если число больше, чем количество символов, то вернуть false.

Например, вызов функции f(“javascript”, 3) должен вернуть текст “jav”.
Вызов f(“html”, 5) должен вернуть false.*/

function hard(string, number){
    if(string.length > number)
    {
       console.log(string.substring(0,number));
    }
}
hard("Ayub", 3);
