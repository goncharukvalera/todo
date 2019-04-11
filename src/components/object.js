// Object.assign(targetOb, sourseObj, ....);
// Копирует значения всех перечисляемых own property
//  из одного или нескольких источников в целево объект targeOb,
//  который и возвращает

let x = {x : 12 };
let y = { y : 22 };

var ob = Object.assign({}, x, y);
console.log(ob);


let z = {x: 555};

// свойства перезаписываются значениями из источников,
// которые расположены правее при вызове Object.assign();

/*
ob = Object.assign({}, x, y, z);
 console.log("x -> ", x);
 console.log("y -> ", y);
 console.log("z -> ", z);
console.log(ob);
*/


/*
ob = Object.assign({}, x, y, z, {x: "Hello", y: "word"});
console.log("x -> ", x);
console.log("y -> ", y);
console.log("z -> ", z);
console.log("ob -> ", ob);

*/
