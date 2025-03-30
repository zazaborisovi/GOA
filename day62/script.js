function forLoop(start , end){
    let sum = 0
    for (let i = start; i <= end; i++){
        sum += i
    }
    return sum
}

function forLoopEven(start, end) {
    let sum = 0
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(forLoop(1 , 5))
console.log(forLoop(1 , 14))
console.log(forLoop(1 , 30))

console.log(forLoopEven(2 , 20))
console.log(forLoopEven(3 , 24))
console.log(forLoopEven(1 , 10))

num1 = Number(prompt("number1: "))
num2 = Number(prompt("number2: "))

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)

userName = String(prompt("your user name: "))
alert("welcome " + userName)
