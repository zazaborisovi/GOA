let myInfo = {
    name: "zaza",
    surname: "borisovi",
    age: 16,
    lives: "batumi"
}

console.log(myInfo.name)
console.log(myInfo.surname)
console.log(myInfo.age)
console.log(myInfo.lives)



myInfo.name = "zaza1"
myInfo.surname = "borisovi1"
myInfo.age = 17
myInfo.lives = "batumi1"

console.log(myInfo.name)
console.log(myInfo.surname)
console.log(myInfo.age)
console.log(myInfo.lives)



const mom = {
    name: "lela",
    surname: "moiswrapishvili",
    age: 42
}
const dad = {
    name: "giga",
    surname: "borisovi",
    age: 48
}
const sister = {
    name: "ana",
    surname: "borisovi",
    age: 19
}

console.log(mom.name)
console.log(mom.surname)
console.log(mom.age)

console.log(dad.name)
console.log(dad.surname)
console.log(dad.age)

console.log(sister.name)
console.log(sister.surname)
console.log(sister.age)

const object1 = {
    name: "objectN1",
    number1: 5,
    number2: 10
}
const object2 = {
    name: "obectN2",
    number1: 5,
    number2: 10
}
console.log(object1 == object2)


const forecast = [
    { day: "Monday", weather: "Partly cloudy", highC: 22, lowC: 14 },
    { day: "Tuesday", weather: "Sunny", highC: 23, lowC: 16 },
    { day: "Wednesday", weather: "Cloudy with a chance of showers", highC: 21, lowC: 13 },
    { day: "Thursday", weather: "Rainy", highC: 17, lowC: 11 },
    { day: "Friday", weather: "Mostly cloudy", highC: 19, lowC: 12 }
  ];
  
  function displayForecast(location, temperature, length, forecast) {
    console.log(`Location: ${location}`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Length of time: ${length}`);
  
    console.log("Weather forecast:");
    forecast.forEach(day => {
      console.log(`\n${day.day}: ${day.weather}, high of ${day.highC}°C, low of ${day.lowC}°C`);
    });
  }
  
  displayForecast("New York City", 20, "5-day forecast", forecast);