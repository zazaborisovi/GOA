function switchText() {
    let button = document.getElementById('myButton')
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')

    let Text = p1.textContent
    p1.textContent = p2.textContent
    p2.textContent = p3.textContent
    p3.textContent = Text
}

let numbers = 0
function increas(number){
    numbers = numbers += number
    document.getElementById("numberDisplay").textContent = numbers
}
function decreas(number){
    number = numbers -= number
    document.getElementById("numberDisplay").textContent = numbers
}
function reset(){
    numbers = numbers -= numbers
    document.getElementById("numberDisplay").textContent = numbers
}
function colorGreen(){
    var elements = document.getElementsByClassName("colors");
    for (var element of elements) {
        element.style.color = "green";
    }
}
function colorRed(){
    var elements = document.getElementsByClassName("colors");
    for (var element of elements) {
        element.style.color = "red";
    }
}
function colorYellow(){
    var elements = document.getElementsByClassName("colors");
    for (var element of elements) {
        element.style.color = "Yellow";
    }
}

let carInfo = {
    brand: "BMW",
    model: "X1",
    year: 2024,
    color: "silver",
    info: function (){
        console.log("brand: " + carInfo.brand + " model: " + carInfo.model + " year: " + carInfo.year + " color: " + carInfo.color)
    }
}

let movie1 = {
    name: "grown ups",
    genre: "comedy",
    releaseYear: 2010,
}
let movie2 = {
    name: "grown ups 2",
    genre: "comedy",
    releaseYear: 2013,
}

function addition(num1 , num2){
    console.log(num1 + num2)
}
function substraction(num1 , num2){
    console.log(num1 - num2)
}
function multiply(num1 , num2){
    console.log(num1 * num2)
}
function divide(num1 , num2){
    console.log(num1 / num2)
}
addition(5 , 8)
substraction(10 , 9)
multiply(10 , 6)
divide(9 , 4)