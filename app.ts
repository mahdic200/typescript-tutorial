/* معرفی تابع ها */

/*
    function name(p1: type, p2: type, p3: type, ...) {
        // یکاری بکن
    }
*/

/* مفهموم انتزاعی تابع */

/* بدون ورودی */
let myFunc: () => string;
let myFunc1: () => number;
let func: () => Person;
let isNameValid: () => boolean;

/* تابع با ورودی */


interface Person {
    firstName: string;
    lastName: string;
    age: number;
    nationalCode?: string;
}
let myFunc2: (a: number, b: number) => number;

let myFunc3: (data: Person) => string;
myFunc3 = function (data) {
    return `fName: ${data.firstName} lName: ${data.lastName} age: ${data.age}`;
};

// console.log(myFunc3({
//     firstName: "john",
//     lastName: "doe",
//     age: 22
// }))

// let person = {
//     firstName: "john",
//     lastName: "doe",
//     age: 22,
//     color: "black",
//     skill: "web develop",
// };
// console.log(myFunc3(person))

/*  تابع با خروجی غیر اصلی */

let myFunc4: (data: Person) => Person;
let myFunc5: (data: Person) => Person;

let func2: (a: number, b: number) => number;
func2 = (a, b) => {
    return a + b;
};

// console.log(func2(12, 15));


/* فهم خودکار کامپایلر */

let isPersonValid = function(data: Person): boolean {
    if (
        data.firstName != "" &&
        data.lastName != "" &&
        data.age > 0
    ) {
        return true;
    }
    else {
        return false
    }
};

// console.log("isValid ? : ", isPersonValid({age: 0,firstName: "", lastName: ""}));

/* تابع توخالی یا ووید */
let fVoid: (...parameters: any) => void;

fVoid = () => {
    console.log("I am void :) !")
}

/* ورودی های پیشفرض */

let wd = function(price: number, discount: number = 0.2): void {
    
}
wd(10_000);

let f2: (...p: number[]) => void = function(a, b, c = 12, d = 20, e?) {
    // ی سری کار
}

/* ورودی های بینهایت */
let jam: (...params: number[]) => number;
jam = (...params) => {
    let temp = 0;
    for(const param of params) {
        temp += param;
    }
    return temp;
}

console.log(jam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));