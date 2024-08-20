let i = 0
while(i <= 10){
    console.log(i)
    i += 1
}
let i2 = 10
while(i2 > 0){
    console.log(i2)
    i2 -= 1
}
function factorial(n) {
    if (n < 0) {
        console.log("Invalid input factorial is not defined for negative numbers")
    }
    let result = 1
    let i = n
    while (i > 0) {
        result *= i
        i--
    }
    console.log(result)
}
factorial(4)
function reversedNumbers(num) {
    let reversed = ''
    let i = num.length - 1
    while (i >= 0) {
        reversed += num[i]
        i--
    }
    console.log(reversed)
}
reversedNumbers("153")
