interface Person {
    readonly national_code: number;
    firstName: string;
    lastName: string;
    age?: number;
}


// function getFullName(person: {
//     firstName: string;
//     lastName: string;
// }) {
//     return `${person.firstName} ${person.lastName}`;
// }
function getFullName(person: Person) {
    if (person.age) {
        return `${person.firstName} ${person.lastName} ${person.age}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'john',
    lastName: 'doe'
}

let jane = {
    firstName: 'jane',
    lastName: 'doe',
    middleName: 'k',
    age: 22
}

let person2: Person = {
    national_code: 656846846,
    firstName: "mahdi",
    lastName: "yechizi",
}


// console.log(getFullName(person2));

/* this code cause Error */
// person2.national_code = 1315561;

/* this is function type ! */
interface StringFormat {
    (str: string, isUpper: boolean): string;
}

let format: StringFormat = (str: string, isUpper: boolean): string => {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hello world', true));


interface Json {
    toJson(): string;
}

class PersonClass implements Json {
    toJson(): string {
        return "";
    }
}
