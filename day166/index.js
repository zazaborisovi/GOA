var name1 = "testname";
var number1 = 12;
var boolean1 = true;
var arr = ["string1", 2]; //creating array with more than one data type
var person = [
    {
        name: "zaza",
        age: 17
    },
    {
        name: "testname",
        age: 10
    }
];
var arrr1 = [
    {
        name: "zaza",
        age: 17
    },
    {
        name: "testname",
        age: 10
    }
];
var personArr = person.map(function (item) { return item.name; });
var arr5 = [
    "name", 24, true,
];
console.log(personArr);
console.log(name1);
console.log(number1);
console.log(boolean1);
//cw 2
var cwarr1 = ["string1", "string2", "string3"];
var cwarr2 = ["string1", 1];
;
var cwPerson1 = {
    name: "testname",
    surname: "testsurname",
    age: 20,
    isMarried: false
};
var cwPerson2 = {
    name: "testname",
    surname: "testsurname",
    age: 20,
    isMarried: false
};
var unknownVar = "gela";
var anyvar = "string";
// let stringVar = unknownVar as string;
// stringVar = "string";
var stringVar = unknownVar || "ge";
console.log(stringVar);
//funcs
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    console.log(a - b);
}
substract(1, 2);
console.log(add(2, 4));
//cw 3
function cwFunction(a, b, c) {
    return [a, b, c];
}
console.log(cwFunction("string", 2, true));
