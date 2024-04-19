document.getElementById("mathForm").addEventListener("submit", function(event){
    event.preventDefault()
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    console.log("First Number:", num1)
    console.log("Second Number:", num2)
})

function displayText() {
    var text = document.getElementById("textInput").value
    var color = document.getElementById("colorInput").value
    var paragraph = document.createElement("p")
    paragraph.style.color = color
    paragraph.textContent = text
    document.body.appendChild(paragraph)
}