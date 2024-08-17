let counter = 0
let PointsDisplay = document.getElementById("PointsDisplay")

function Points() {
    counter += 1
    PointsDisplay.textContent = counter
}
function PointsV2(){
    counter += 2
    document.getElementById("PointsDisplay").textContent = counter
}
function PointsV3(){
    counter += 4
    document.getElementById("PointsDisplay").textContent = counter
}
function PointsV4(){
    counter += 8
    document.getElementById("PointsDisplay").textContent = counter
}
function PointsV5(){
    counter += 16
    document.getElementById("PointsDisplay").textContent = counter
}
function PointsV6(){
    counter += 32
    document.getElementById("PointsDisplay").textContent = counter
}

function Buttons(){
    if (counter >= 3000){
        counter -= 3000
        document.getElementById("PointsDisplay").textContent = counter
        document.getElementById('SB').style.visibility = "visible"
        buyEnable()
    }
    else if (counter >= 1000){
        counter -= 1000
        document.getElementById("PointsDisplay").textContent = counter
        document.getElementById('NB5').style.visibility = "visible"
        buyEnable()
    }
    else if (counter >= 750){
        counter -= 750
        document.getElementById("PointsDisplay").textContent = counter
        document.getElementById('NB4').style.visibility = "visible"
        buyEnable()
    }
    else if (counter >= 500){
        counter -= 500
        document.getElementById("PointsDisplay").textContent = counter
        document.getElementById('NB3').style.visibility = "visible"
        buyEnable()
    }
    else if (counter >= 100) {
        counter -= 100
        document.getElementById("PointsDisplay").textContent = counter
        document.getElementById('NB2').style.visibility = "visible"
        buyEnable()
    }
    else if(counter >= 50){
        counter -= 50
        document.getElementById("PointsDisplay").textContent = counter
        document.getElementById('NB1').style.visibility = "visible"
        buyEnable()
    }
}
function buyEnable() {
    if (counter >= 3000){
        document.getElementById("SecretButton").style.backgroundColor = 'rgba(255, 0, 0, 0.60)'
        document.getElementById("BB5").style.borderColor = 'green'
    }
    else if (counter >= 1000){
        document.getElementById("BB5").style.backgroundColor = 'rgba(0, 128, 0, 0.53)'
        document.getElementById("BB5").style.borderColor = 'green'
    }
    else if (counter >= 750){
        document.getElementById("BB4").style.backgroundColor = 'rgba(0, 128, 0, 0.53)'
        document.getElementById("BB4").style.borderColor = 'green'
    }
    else if (counter >= 500){
        document.getElementById("BB3").style.backgroundColor = 'rgba(0, 128, 0, 0.53)'
        document.getElementById("BB3").style.borderColor = 'green'
    }
    else if (counter >= 100){
        document.getElementById("BB2").style.backgroundColor = 'rgba(0, 128, 0, 0.53)'
        document.getElementById("BB2").style.borderColor = 'green'
    }
    else if (counter >= 50) {
        document.getElementById("BB1").style.backgroundColor = 'rgba(0, 128, 0, 0.53)'
        document.getElementById("BB1").style.borderColor = 'green'
    }

    if (document.getElementById('NB1').style.visibility === 'visible'){
        document.getElementById("BB1").style.visibility = 'hidden'
    }
    if (document.getElementById('NB2').style.visibility === 'visible'){
        document.getElementById('BB2').style.visibility = 'hidden'
    }
    if (document.getElementById('NB3').style.visibility === 'visible'){
        document.getElementById('BB3').style.visibility = 'hidden'
    }
    if (document.getElementById('NB4').style.visibility === 'visible'){
        document.getElementById('BB4').style.visibility = 'hidden'
    }
    if (document.getElementById('NB5').style.visibility === 'visible'){
        document.getElementById('BB5').style.visibility = 'hidden'
    }
    if (document.getElementById('SB').style.visibility === 'visible'){
        document.getElementById('SecretButton').style.visibility = 'hidden'
    }
}