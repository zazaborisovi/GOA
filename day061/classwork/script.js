console.log(true || false)
console.log(false || true)
console.log(true || true)
console.log(false || false)
console.log(true && false)
console.log(false && true)
console.log(true && true)
console.log(false && false)



function andOr(){
    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)
    if (num1 > 18 && num2 > 18){
        console.log("both numbers are more then 18")
    }
    else if (num1 > 18 || num2 > 18){
        console.log("one of them is more then 18")
    }
    else{
        console.log("none of them are more then 18")
    }
}