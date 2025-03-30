function infoJoin(name , surname , age , city , hobby){
    console.log("your name is: " + name + " your surname is: " + surname + " your age is: " + age + " you live in city named: " + city + " your hobby is: " + hobby)
}
infoJoin("name1" , "surname1" , 16 , "city1" , "programming")

function ageCheck(age){
    if (age > 18){
        console.log("you are allowed on this website")
    }
    else if (age == 18){
        console.log("you are allowed on this website but with some limitations")
    }
    else if (age < 18){
        console.log("you are not allowed on this website")
    }
}
ageCheck(17)
ageCheck(20)
ageCheck(18)

function alerter(){
    alert("Clicked")
}

function colorChanger(){
    document.getElementById("changeColor").style.color = "red"
}

function changeColorWhenLoaded(){
    document.getElementById("changeColorOnLoad1").style.color = "blue"
    document.getElementById("changeColorOnLoad2").style.color = "purple"
}
changeColorWhenLoaded()