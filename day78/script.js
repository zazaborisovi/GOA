//DOM aris obieqti sadac htmlis paili warmodgenilia obieqtis saxit
let myP = document.getElementById("p1")

setTimeout( function(){
    myP.textContent = "p content"
    myP.style.color = "yellow"
    myP.style.backgroundColor = "blue"
} , 3000)

let myPbyId = document.getElementById("p1") //selects a single element that has p1 id
let myPbyClass = document.getElementsByClassName("p1") //selects all elements that have p1 class
let myPbyTagName = document.getElementsByTagName("p") //selects multiple elements that are p tags
let myPbyQuarry = document.querySelector(".p1") //selects first element that has class p1
let myPbyQuarryAll = document.querySelectorAll(".p1") //selects all elements that are same class/tag
