function raiseError(message: string) : never {
    throw new Error(message);
}

function reject() {
    return raiseError("Rejected");
}

let loop = function forever() {
    while (true) {
        console.log("hello");
    }
}

function fn(a: string | number) : boolean {
    if (typeof a == "string") {
        return true;
    } else if (typeof a == "number") {
        return false;
    }

    return raiseError("not a valid argument !");
}


console.log(fn(true as unknown as string))