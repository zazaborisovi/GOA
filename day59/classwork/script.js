// console.log(typeof("5" + 5))
// //55
// console.log(typeof("5" - 5))
// //0
// console.log(typeof("5" * 5))
// //25
// console.log(typeof("5" / 5))
// //1
// console.log(parseInt("5") + 5)
// console.log(Number("5" + 5))
// console.log(String("5" + 5))
// console.log(parseFloat("5" + 5))

let display = document.getElementById("numberDisplay")
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value
let mathFunctions = document.getElementById("mathFunction").value

function equalsTo(){
    let results = 0
    if (mathFunctions === "+"){
        results = num1 + num2
        display.textContent = results
    }
    else if (mathFunctions === "-"){
        results = num1 - num2
        display.textContent = results
    }
    else if (mathFunctions === "*"){
        results = num1 * num2
        display.textContent = results
    }
    else if (mathFunctions === "/"){
        results = num1 / num2
        display.textContent = results
    }
}
