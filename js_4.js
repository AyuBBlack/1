/* Домашка 4

1) Создать объект house(дом). Со свойствами width(ширина), 
length(длина), rooms(комнаты), address, type(тип)

*все значения свойств пишите от себя 

2) Добавьте новое свойство(через точку) housemates(жильцы). 
3) добавьте метод getArea() который возвращает площадь дома (длина х ширина) 
(использовать this)
4) написать условие, если в объекте есть свойство type то изменить его значение 
на «big house»

*/

//Задание 1.
let house = 
{
    width: 30,
    length: 20,
    rooms: 7,
    type: 1,
    getAreaa()
    {
        return(`Площадь дома: ${this.width*this.length} квадратов`); // 3 задание.
    }
}

house.housemates = 4; // 2 Задание

console.log (house,house.getAreaa()); // Задание 4

if ("type" in house)
{
    house.type = "big house";
}
