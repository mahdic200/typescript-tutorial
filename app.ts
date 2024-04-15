let str: any = 45;
str = "mahdi"
str = true
str = {name: ""}

/* | in annotation */
let m : string | null;

let t: {
    name: string;
    age: number;
    height: number;
    isMarried: boolean;
    account?: any;
} = {
    name: "mahdi",
    age: 12,
    height: 170,
    isMarried: false
}

let array: (string | number)[];
array = [1, 2, "mahdi", ""];

let array2: boolean[];
array2 = [true, false, true, false]

let f: (name: (string | number)) => string = (name: string | number) => {
    return `hello ${name}`;
}


let f2: (name: string, family: string, age: number) => string = (name: string) => {
    return `hello ${name}`;
}

let f3: (...args: any) => void;

f3 = (name, family, age) => {

}
