/*Создай функцию, которая принимает 
два значения и верни объект, у которого ключ равен первому параметру, а значение второму.
*/
let house = 
    {
        width: 30,
    }

function a (type, number){
    Object.keys(house)[0] = type;
    house.width = number;  
    return house;
}
console.log(a("root", 1));