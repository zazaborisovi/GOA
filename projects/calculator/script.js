let display = document.getElementById("numberDisplay")
let divider = document.getElementById("divide")
let multiplyer = document.getElementById("multiply")
let substract = document.getElementById("substraction")
let add = document.getElementById("addition")
let numbers = 0
let numberSaver1 = 0
let numberSaver2 = 0

function valueOfNumbers(value){
    if (numbers == 0){
        numbers += value
        display.textContent = numbers
    }
    else if (numbers > 0 && numbers <= 10){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 10 && numbers <= 100){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 100 && numbers <= 1000){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 1000 && numbers <= 10000){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 10000 && numbers <= 100000){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 100000 && numbers <= 1000000){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 1000000 && numbers <= 10000000){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
    else if (numbers > 10000000 && numbers <= 100000000){
        numbers = numbers * 10 + value
        display.textContent = numbers
    }
}

function divide(){
    if (numberSaver1 == 0 && numbers != 0){
        numberSaver1 += numbers
        divider.style.backgroundColor = "rgba(255, 255, 255, 0.382)"
        divider.style.color = "yellow"
    }
    numbers -= numbers
}

function multiply(){
    if (numberSaver1 == 0 && numbers != 0){
        numberSaver1 += numbers
        multiplyer.style.backgroundColor = "rgba(255, 255, 255, 0.382)"
        multiplyer.style.color = "yellow"
    }
    numbers -= numbers
}

function substraction(){
    if (numberSaver1 == 0 && numbers != 0){
        numberSaver1 += numbers
        substract.style.backgroundColor = "rgba(255, 255, 255, 0.382)"
        substract.style.color = "yellow"
    }
    numbers -= numbers
}

function addition(){
    if (numberSaver1 == 0 && numbers != 0){
        numberSaver1 += numbers
        add.style.backgroundColor = "rgba(255, 255, 255, 0.382)"
        add.style.color = "yellow"
    }
    numbers -= numbers
}


function equals(){
    if (divider.style.backgroundColor = "rgba(255, 255, 255, 0.382)" && divider.style.color == "yellow"){
        numberSaver2 += numbers
        numbers -= numbers
        numberSaver1 = numberSaver1 / numberSaver2
        numbers = numberSaver1
        numberSaver1 -= numberSaver1
        numberSaver2 -= numberSaver2
        display.textContent = numbers
        numbers -= numbers
        divider.style.backgroundColor = "rgba(254, 254, 21, 0.444)"
        divider.style.color = "white"
    }
    else if (multiplyer.style.backgroundColor = "rgba(255, 255, 255, 0.382)" && multiplyer.style.color == "yellow"){
        numberSaver2 += numbers
        numbers -= numbers
        numberSaver1 = numberSaver1 * numberSaver2
        numbers = numberSaver1
        numberSaver1 -= numberSaver1
        numberSaver2 -= numberSaver2
        display.textContent = numbers
        multiplyer.style.backgroundColor = "rgba(254, 254, 21, 0.444)"
        multiplyer.style.color = "white"
    }
    else if (substract.style.backgroundColor = "rgba(255, 255, 255, 0.382)" && substract.style.color == "yellow"){
        numberSaver2 += numbers
        numbers -= numbers
        numberSaver1 = numberSaver1 - numberSaver2
        numbers = numberSaver1
        numberSaver1 -= numberSaver1
        numberSaver2 -= numberSaver2
        display.textContent = numbers
        substract.style.backgroundColor = "rgba(254, 254, 21, 0.444)"
        substract.style.color = "white"
}
    else if (add.style.backgroundColor = "rgba(255, 255, 255, 0.382)" && add.style.color == "yellow"){
        numberSaver2 += numbers
        numbers -= numbers
        numberSaver1 = numberSaver1 + numberSaver2
        numbers = numberSaver1
        numberSaver1 -= numberSaver1
        numberSaver2 -= numberSaver2
        display.textContent = numbers
        add.style.backgroundColor = "rgba(254, 254, 21, 0.444)"
        add.style.color = "white"
    }
}    

function resetTheNumbers(){
    numbers -= numbers
    numberSaver1 -= numberSaver1
    numberSaver2 -= numberSaver2
    display.textContent = numbers
}