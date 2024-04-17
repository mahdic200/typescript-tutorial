let employee : object;

employee = {
    firstName: '',
    lastName: '',
    age: 25,
    jobTitle: ''
};

/* this code cause error */
// employee = "this is my string"

/* this code cause error */
// console.log(employee.hireDate);


let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

employee2 = {
    firstName: "john",
    lastName: "doe",
    age: 21,
    jobTitle: "web developer"
}


/* or you can combine both syntaxes */
let employee3: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: "john",
    lastName: "doe",
    age: 21,
    jobTitle: "web developer"
}

let emp: {} = {};


let car: {
    color: string;
    material: string;
    length: number;
    gas: () => void;
    boogh: () => void;
};


car = {
    color: "blue",
    material: "iron",
    length: 2.5,
    gas: () => {},
    boogh: () => {},
};
