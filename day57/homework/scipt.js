let div = document.getElementById("div1")
function changeSettings(){
    let width = document.getElementById("widthInput").value + "px"
    let height = document.getElementById("heightInput").value + "px"
    let text = document.getElementById("p1")
    let tContent = document.getElementById("textInput").value
    let tColor = document.getElementById("colorInput").value
    let backgroundColor = document.getElementById("bgColor").value

    div.style.backgroundColor = backgroundColor
    div.style.width = width
    div.style.height = height
    text.textContent = tContent
    text.style.color = tColor
}

let parentobj = {
    kidobj1: {
        numbers: 52
    },
    kidobj2: {
        numbers: 60
    }
}
console.log(parentobj.kidobj1.numbers)
console.log(parentobj.kidobj2.numbers)

parentobj.kidobj1.numbers = 90
parentobj.kidobj2.numbers = 50

console.log(parentobj.kidobj1.numbers)
console.log(parentobj.kidobj2.numbers)