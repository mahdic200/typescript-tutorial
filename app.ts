/* primitive */

/* strings */
let myVar: any = 'string with single quotes';
console.log(myVar, typeof myVar);
myVar = "string with double quotes";
console.log(myVar, typeof myVar);

/* numbers */
myVar = 12;
console.log(myVar, typeof myVar);
myVar = 6.5;
console.log(myVar, typeof myVar);
myVar = -0.0000005;
console.log(myVar, typeof myVar);

/* boolean */
myVar = true;
console.log(myVar, typeof myVar);
myVar = false;
console.log(myVar, typeof myVar);

/* null */
myVar = null;
console.log(myVar, typeof myVar);

/* undefined */
myVar = undefined;
console.log(myVar, typeof myVar);


class Test {}

/* none primitive */
let test = new Test();
console.log(test, typeof test)
test = [1, 2]
console.log(test, typeof test)
function func() {}
test = func
console.log(test, typeof test)