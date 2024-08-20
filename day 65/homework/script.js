//conditional statements
function checkNumberTypes(num){ //homework N1
    if (num > 0){
        console.log(num + " number is positive")
    }
    else if (num < 0){
        console.log(num + " number is negative")
    }
    else{
        console.log(num + " number is 0")
    }
}
function oddOrEven(num){ //homework N2
    if (num % 2 == 0){
        console.log(num + " is even")
    }
    else{
        console.log(num + " is odd")
    }
}
function checkLeapYear(year){ //homework N3
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year")
    }
    else {
        console.log(year + " is not a leap year")
    }
}
function biggerNumber(num1 , num2){ //homework N4
    if (num1 > num2){
        console.log(num1 + " is bigger number")
    }
    else if (num1 < num2){
        console.log(num2 + " is bigger number")
    }
    else{
        console.log("non of the numbers are bigger")
    }
}
function smallestNumber(num1 , num2 , num3){ //homework N5
    if (num1 <= num2 && num1 <= num3){
        console.log(num1 + " is smallest number")
    }
    else if(num2 <= num1 && num2 <= num3){
        console.log(num2 + " is smallest number")
    }
    else{
        console.log(num3 + " is smallest number")
    }
}
function isStringEmpty(string){ //homework N6
    if (string == " " || string == ""){
        console.log("string is empty")
    }
    else{
        console.log("string is not empty")
    }
}
function isPalindrome(string) { //homework N7
    let cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');

    if (cleanedStr === reversedStr) {
        console.log("string is palindrome")
    } else {
        console.log("string is not palindrome")
    }
}
function letterGrades(grades) { //homework N8
    if (grades >= 90 && grades <= 100) {
        console.log("A")
    }
    else if (grades >= 80 && grades < 90) {
        console.log("B")
    }
    else if (grades >= 70 && grades < 80) {
        console.log("C")
    }
    else if (grades >= 60 && grades < 70) {
        console.log("D")
    }
    else if (grades >= 0 && grades < 60) {
        console.log("F")
    }
    else {
        console.log("invalid grade")
    }
}
function isPrime(num) { //homework N9
    if (num <= 1) {
        console.log("is not prime number")
    }
    else if (num <= 3) {
        console.log("is prime number")
    }
    else if (num % 2 == 0 || num % 3 == 0) {
        console.log("is not prime number")
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            console.log("is not prime number")
        }
    }
}
function celsiusToFehrenheit(celsius){ //homework N10
    console.log(celsius + " celsius is " + ((celsius * 1.8) + 32))
}
celsiusToFehrenheit(1)