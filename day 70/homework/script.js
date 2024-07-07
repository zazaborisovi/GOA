function dateMDY(){
    let date = new Date()
    let month = String(date.getMonth())
    let day = String(date.getDate())
    let year = String(date.getFullYear())
    console.log(month + "/" + day + "/" + year)
}
dateMDY()
function currentTime(){
    let date = new Date()
    let hour = String(date.getHours())
    let minute = String(date.getMinutes())
    console.log(hour + ":" + minute)
}
currentTime()
function dayOfTheWeek(x){
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    if(x < 1 || x > 7){
        console.log("incorrect number please input numbers between 1 to 7")
    }
    else{
        console.log(daysOfWeek[x % 7])
    }
}
function dateYMD(){
    let date = new Date()
    let month = String(date.getMonth())
    let day = String(date.getDate())
    let year = String(date.getFullYear())
    console.log(year + "/" + month + "/" + day)
}
dateYMD()

function randomInt(min , max){
    min = Math.ceil(min)
    max = Math.floor(max)

    console.log(Math.floor(Math.random() *  (max - min + 1)) + min)
}
randomInt(1 , 100)
function calculateSquareRoot(number){
    if (number < 0){
      console.log("Cannot calculate the square root of a negative number.")
    }
  
    console.log(Math.sqrt(number))
}
calculateSquareRoot(10)
function roundTheNumber(number){
    number = Math.round(number)
    console.log(number)
}
roundTheNumber(33.5)