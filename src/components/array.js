import {assert} from './_functions';




var res,
    arr = [2,4,6,10,11,15];
assert(true, arr);

// includes  - return true / false
/*
res = arr.includes(6);
assert(true, res);
*/

// keys() -> возвращает итератор с ключами
/*
res = arr.keys();
for(var item of res) {
    console.log(item);
}
*/

// values() -> возвращает итератор с значениями
/*
res = arr.values();
for(var item of res) {
    console.log(item);
}
*/


// find - в качестве аргумента принимает функцию,
// Возвращает первый элемент, для которого функция вернет true

/*
res = arr.find(item => item == 4);
assert(true, res);

res = arr.find(item => item %2 > 0);
assert(true, res);
*/


// findIndex -> возвращает индекс найденной сущности
/*
res = arr.findIndex( item => item === 6);
assert(true, res);
*/



// Пример
/*
class Person {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}
let users = [
    new Person('Bill', 'admin'),
    new Person('John', 'moderator'),
    new Person('Mike', 'user')
];

var name = users.find( item => item.position == "admin").name;
assert(true, name);
 */