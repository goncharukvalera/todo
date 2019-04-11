
/*function(a) {
	a = a || 10;
	// a !== undefined ? a : 10;
}

foo(0);

function(a = 10) {
 // ...
}
*/

/* =========================== */
// Lazy expresstion ->  вызажение не запускается, пока не нужно
// Например  пока не вызовем функцию

/*function bar() {
	  console.log("Invoked !!!");
}

function foo(a = bar()) {
	// Сколько раз вызывается функция bar ? 
}

// foo(1); // Сколько раз вызывается функция bar ? 
// foo(); // Сколько раз вызывается функция bar ? 

*/
/* ==========Вариант использования  default values === */

/*
function required() {
	throw "Parametrs required !";
}

function myFunc(x = required()){
		console.log(x);
}
myFunc(); // Uncaught Parametrs required
// myFunc(2); // 2
*/

