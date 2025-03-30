// let first = document.getElementById("p1");
// let last = document.getElementById("p5");

// console.log(first);
// console.log(last);

// const myInfo = {
//     name: "zaza",
//     age: 16,
// }

// const friendInfo = {
//     name: "gio",
//     age: 15,
// }

// function switchText() {
//     let button = document.getElementById('myButton');
//     let p1 = document.getElementById('p1');
//     let p2 = document.getElementById('p2');

//     let Text = p1.textContent;
//     p1.textContent = p2.textContent;
//     p2.textContent = Text;
// }

// function addition(number1, number2) {
//     return number1 + number2;
// }

// function multiplication(number1, number2) {
//     return number1 * number2;
// }

// console.log("Addition:", addition(5, 3));
// console.log("Multiplication:", multiplication(5, 3));

// function greet(name){
//     console.log("hello " + name)
// }
// greet("zaza")

// function mathFunction(number1 , number2 , number3){
//     let firstTwo = number1 + number2
//     console.log(firstTwo)
//     console.log(firstTwo * number3)
// }
// mathFunction(5 , 4 , 2)

// function isEven(number) {
//     if (number % 2 === 0) {
//         console.log(number + " არის ლუწი.");
//     } else {
//         console.log(number + " არ არის ლუწი.");
//     }
// }
// isEven(5)
// isEven(11)
// isEven(8)

// function triangle(side1 , side2 , side3){
//     let triangleSideSizes = side1 + side2 + side3
//     console.log(triangleSideSizes)
// }
// triangle(5 , 5 , 5)

let car = {
    name: "tesla",
    model: 3,
    year: 2023,
    start: function (){
        console.log("start")
    },
    break: function (){
        console.log("break")
    }
}
car.start()
car.break()

let personalInfo = {
    name: "zaza",
    surname: "borisovi",
    text: function (){
        console.log("your name is " + personalInfo.name + " your surname is " + personalInfo.surname)
    }
}
