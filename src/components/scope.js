// let или var ? 
/*
function foo(x,y){
	if(x < y) {
		let tmp = x;
		y = x;
		x = tmp;
		console.log("--Inside if --", tmp);
	}
	console.log("--Outside if --", tmp);
	for(let i = 0; i < 5; i++) {
		  // ...
	}
	console.log("--outside  for -- ", i);
}

foo(2,3);
*/



// Где let  может вызвать ошибку ? 
/*function foo(x){
	 try {
	 	  let z = bar(x);
	 } catch(err) {
	 	  // ....
	 }
	 console.log(z); // z недоступна здесь !!!
}

function bar(x) {
	return x * 2;
}
*/


// Explicit block 
/*function foo(x, y){
		if(x < y ) {
        {
        	console.log(x); // error
        	let x  = x * 2;
        }

		}

}
*/

// const - переменная которую нельзя переопределить

/*const arr = [1,2,3];
//const arr = Object.freeze([1,2,3]);

function foo(a) {
	a[0] = 100;
}

console.log(arr);
foo(arr);
console.log(arr);
*/

