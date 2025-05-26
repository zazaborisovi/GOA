const person = {
    name: "zaza",
    email: "zazaborisovi@gmail.com",
    age: 16,
    work: {
        workTime: "5 hours a day",
        money: 5000,
    }
}
console.log(person.name)
console.log(person.email)
console.log(person.age)
console.log(person.work)
person.work.workTime = "9 hours a day"
person.work.money = 10000
console.log(person.work.workTime)
console.log(person.work.money)


function changeSettings(){
    let bgColor = document.getElementById("bgColor").value
    let width = document.getElementById("widthInput").value + "px"
    let height = document.getElementById("heightInput").value + "px"

    let block = document.getElementById("divN1")
    block.style.backgroundColor = bgColor
    block.style.width = width
    block.style.height = height
}
