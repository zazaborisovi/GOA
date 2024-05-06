function sum(){
    //homework N1
    let strNum = parseInt(document.getElementById("stringNumber").value)
    let num = parseInt(document.getElementById("number").value)

    console.log(strNum + num)
    console.log(strNum - num)
    console.log(strNum * num)
    console.log(strNum / num)

    //homework N3
    console.log(strNum > num)
    console.log(strNum >= num)
    console.log(strNum < num)
    console.log(strNum <= num)
    console.log(strNum == num)
    console.log(strNum != num)
}
    //homework N2
function addParagraph(){
    let text = document.getElementById("textInput").value
    let textColor = document.getElementById("colorInput").value
    let bgColor = document.getElementById("bgColorInput").value
    let paragraph = document.createElement("p")

    paragraph.textContent = text
    paragraph.style.color = textColor
    paragraph.style.backgroundColor = bgColor
    document.body.appendChild(paragraph)
}
    //homework N4
function practicing(num1 , num2){
    console.log(parseFloat(num1) , parseFloat(num2))
    console.log(parseInt(num1) , parseInt(num2))

}
practicing(4 , 5)
practicing(35 , 42)
practicing(53 , 29)

    //homework N5
function changeBgColorN2(){
    let myButtonN2 = document.getElementById("myButtonN2")
    myButtonN2.style.backgroundColor = "blue"
}