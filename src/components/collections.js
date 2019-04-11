import {assert} from './_functions';

// Объект Set - кллекция уникальных значений любого типа
// Методы - add, has, delete, clear
// Свойство size
// Для итерации Set можно использовать итераторы

/*
var  arr = [1,1,1,2,2,3,4,5,5];
var s = new Set(arr);
console.log(s); // [1,2,3,4,5]
console.log(s.size); // 5
console.log(s.has(2)); // true
s.forEach( el => console.log(el));
*/


/*
var s = new Set([10,20,30]);
assert(s.has(40), "Set has 40");
console.log(s);

s.add(40);
assert(s.has(40), "Set has 40");
console.log(s);

s.delete(40);
assert(s.has(40), "Set has 40");
console.log(s);

s.clear();
console.log(s);
*/

/*
var s = new Set('Hello!');
console.log(s);
console.log(s.has('!'));

s.add(12);
console.log(s);
*/

// ************ Итераторы ************************* //
// Итераторы - это объекты с помощью которых можно делать обход
// элементов коллекции в цикле
// Методы - next()  - возвращает value и done

/*
var mySet = new Set(['a', 'b', 'c']);
var items = mySet.entries(); // entries -> return iterator
console.log(items.next()); // {value: Array[2], done: false}
*/
// Обратите внимание, value -> 0:a, 1:a
// Это потому, что у коллекции Set нет ключей



// ******************* Map ********************** //


// Объект Map - кллекция пар ключ-значение любого типа
// пары ключ-значение хранятся в порядке добавления
// Методы -> set(key, val), get(key), has(key), delete(key), clear()

/*
var arr = [
    ['name', 'Bill'],
    ['age', 33],
    [300, 500]
];
var myMap = new Map(arr);
console.log(myMap);

//myMap.set('phone', 333444555);
//console.log(myMap);

//myMap.set('phones', {home: 222, work:333, mobile: 555});
// console.log(myMap);

//var phone = myMap.get('phone');
//console.log(phone);

//var phones = myMap.get('phones');
//console.log(phones.home);
*/



/*
var m = new Map();
var ob = {name: 'JavaScript'};
m.set(ob, 'ES2015'); // ключ может быть ссылкой на объект
console.log("m -> ", m);
console.log("m.has(ob) -> ", m.has(ob));
*/

/*
m.set("2", 9);

let st = m.get(ob); // получение значения по ключу
console.log("st -> ", st);
*/


// если добавить новое значение с уже существующим ключом
// нвое значение затрет предыдущее

/*
console.log("m.get('2') -> ", m.get("2"));
m.set("2", 1000);
console.log("m.get('2') -> ", m.get("2"));
*/



// Iterator для  Map

var myMap = new Map([ ['a', 100], ['b', 300] ]);

/*
var mapItems = myMap.entries();
console.log(mapItems.next()); // 0:a, 1:100
console.log(mapItems.next()); // 0:b, 1:300
console.log(mapItems.next()); // {value: undefined, done: true}
*/

/*
var mapValues = myMap.values();
console.log(mapValues.next()); // {value: 100, done: false}

for( var item of myMap.values()){
    assert(true, item);
}
*/

/*
var mapKeys = myMap.keys();
console.log(mapKeys); // {"a", "b"}

for( var key of myMap.keys()){
    assert(true, key + ' -> ' + myMap.get(key));
}
*/






// *********************   WeakMap  ******************** //

// Отличия от Map:
// - ключи - только ссылки на объекты
// - не является enumerable -> то есть нельзя
//   получить его размер и итерировать
// - если в коде удаляется объект, ссылка на который
//    является ключом, то ключ также удаляется


/*
var weak = new WeakMap();
weak.set('publisher', 'Design-class'); // Error-> ключи - только ссылки на объекты
*/



 /*
var course = { title: 'JavaScript', publisher: 'Design-class'};
var company = {title: 'Design-class'};

weak.set(course, {price: 100});
weak.set(company, "DC");

console.log("weak -> ", weak);



assert(true, weak.get(course).price);
assert(true, weak.get(company));

console.log("weak.has(couse) -> ", weak.has(course));

console.log("course = null");
course = null;
console.log("weak.get(course) -> ", weak.get(course)); // undefined


console.log("delete company");
weak.delete(company);
console.log("weak.get(company) -> ", weak.get(company)); // undefined

weak.clear(); // clear all keys
*/




/*
let map = new WeakMap;

class EventTarget{
    constructor(){
        map.set(this, {
            listeners: {}
        });
    }

    add(listeners, fn){
        let listeners = map.get(this).listeners;
        if(!listeners[type]) {
            listeners = [];
        }
        listeners[type].push(fn);
    }
}
*/









