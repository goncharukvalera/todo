import {assert} from './_functions';


function helloWorld(greeting, name){
    assert(true, `${greeting} ${name}`);
}
helloWorld('Hello', 'ES2015')


// Arrow function
// - нельзя использовать как конструктор объектов
// - к ним нельзя применять оператор new
// - они не имеют this, и используюе его из  lexical scope
// то есть  this в arrow функции  имеет такое значение как и содержащая ее область 


/*
var helloWorldArrow = (greeting, name) => {
     assert(true, `${greeting} ${name}`)
};

helloWorldArrow('Hello', 'PHP');


var greet = (greeting, name) => greeting + ' ' + name;
assert(true, greet('Hello', 'React'));

// Функция без параметров
var noParamsFunc = () => assert(true, "function without params");
noParamsFunc();

*/

// Arrow function and iterators
/*
var courses = [
    'HTML and CSS',
    'JavaScript',
    'JavaScript Advanced',
    'PHP'
];

courses.map( (item) => console.log(item.toUpperCase()));


var nums = [2, 120, 6, 12,10, 78];
assert(true, `No sorted nums ->  ${nums}`);
var sortNums = nums.sort( (a,b) =>  a - b);
assert(true, `Sorted nums ->  ${sortNums}`);

*/



// - this имеет такое значение как и содержащая ее область
/*
function Course() {
    this.name = 'JavaScript advanced',
    this.publisher = 'Design class',

    this.summary = () =>  `Course ${this.name} published by ${this.publisher}`,

    this.details = function(){
        let t = setInterval( () => assert(true, this.summary()), 1000);
        setTimeout( () => clearInterval(t), 4000);
    }
}

var c = new Course();
c.details();
*/

/*

var courses = [
    {title: 'HTML and CSS', price: 100},
    {title: 'JavaScript', price: 300},
    {title: 'JavaScript Advanced', price: 500},
    {title: 'PHP', price: 600}
];

courses.map( (item) => (
     () => assert(true, `${item.title} -  ${item.price}`)
  )());
*/


// Destruction
/*
function getDate(){
    return [15, 7, 2016];
}
var [day, month, year] = getDate();

assert(true, `${day}, ${month}, ${year}`);
*/


/*
function currentDate(){
    return {d: 15, m: 7, y: 2016};
}
var {d: day, m: month, y: year} = currentDate();
assert(true, `${day}, ${month}, ${year}`);
*/
