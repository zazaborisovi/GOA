let person = {
    name: "zaza",
    surname: "borisovi",
    age: 16,
    email: "zazaborisovi@gmail.com",
}
console.log(person.name , person.age)
for (const property in person) {
    if (person.hasOwnProperty(property)) {
      console.log(`${property}: ${person[property]}`);
    }
  }
let car = {
    model: "model",
    age: 2019,
    owner: {
        name: "name of owner",
        age: "age of owner"
    },

}
const carAgeCalculator = (2020 - car.age) in car

console.log(car.owner.name , car.age)

car.model = "model2"