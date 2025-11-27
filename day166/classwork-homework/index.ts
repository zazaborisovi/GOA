let name1: string = "testname";
let number1: Number = 12;
let boolean1: Boolean = true;

let arr: (string | number)[] = ["string1" , 2]; //creating array with more than one data type

type Person = {
    name: string;
    age: number;
};

const person: Person[] = [
    {
    name: "zaza",
    age: 17
    },
    {
        name: "testname",
        age: 10
    }
];

const arrr1: Array<Person> = [
    {
    name: "zaza",
    age: 17
    },
    {
        name: "testname",
        age: 10
    }
];

const personArr = person.map((item) => item.name);


const arr5: [string,number,boolean] = [
    "name", 24 , true,
];



console.log(personArr);

console.log(name1);
console.log(number1);
console.log(boolean1);


//cw 2

const cwarr1: string[] = ["string1" , "string2" , "string3"];
const cwarr2: (string | number)[] = ["string1" , 1];

interface cwObj {
    name: string;
    surname: string;
    age: number;
    isMarried: boolean;
};

type cwObj2 = {
    name: string;
    surname: string;
    age: number;
    isMarried: boolean;
};

const cwPerson1: cwObj = {
    name: "testname",
    surname: "testsurname",
    age: 20,
    isMarried: false
};
const cwPerson2: cwObj2 = {
    name: "testname",
    surname: "testsurname",
    age: 20,
    isMarried: false
};


let unknownVar :unknown = "gela";
let anyvar: any = "string";

// let stringVar = unknownVar as string;
// stringVar = "string";

let stringVar: string = (<string>unknownVar) || "ge"
console.log(stringVar)

//funcs

function add(a:number , b:number): number{
    return a + b
}
function substract(a:number , b:number):void{
    console.log(a - b)
}
substract(1, 2)

console.log(add(2 , 4))

//cw 3

function cwFunction(a:string , b:number , c:boolean):  Array<any>{
    return [a , b , c]
}
console.log(cwFunction("string", 2 , true))

function error(message:string): never{
    throw new Error(message)
}
