//classwork 1
const array1 = new Array("index0" , "index1" , "index2")
const array2 = ["index0" , "index1" , "index2"]

array1[2] = "new index2"
array2[1] = "new index1"

console.log(array1[2])
console.log(array2[1])

array1.push("index3")
array2.push("index3")

console.log(array1)
console.log(array2)

array1.pop()
array2.pop()

console.log(array1)
console.log(array2)

//classwork 2

const numbersArray = [6 , 4 , 2 , 7 , 9 , 10 , 5 , 2 , 1 , 15]
let sum = 0
for(let i = 0; i < 10 ; i += 1){
    sum += numbersArray[i]
}
console.log(sum)

//classwork 3

const names = ["nika" , "giorgi" , "luka" , "nika" , "giga" , "luka" , "nini" , "giorgi" , "giga" , "giorgi" , "luka"]
let repeatedNames = 0
for(let i = 0; i <= 10; i += 1){
    if (names[i] == "giorgi"){
        repeatedNames += 1
    }
}
console.log(repeatedNames)

//classwork 4

const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
for(let i = 0; i < 10; i += 1){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i] + " is even number")
    }
    else{
        console.log(numbers[i] + " is odd")
    }
}

//classwork 5

let array3 = array1.concat(array2) //arrays from first classwork
console.log(array3)

//classwork 6

const newNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15]
let evenNumbers = []
let oddNumbers = []

for(let i = 0; i < 15; i += 1){
    if(newNumbers[i] % 2 == 0){
        evenNumbers.push(newNumbers[i])
    }
    else{
        oddNumbers.push(newNumbers[i])
    }
}
console.log(evenNumbers)
console.log(oddNumbers)

//classwork 7

for(let i = 0; i < 10; i += 1){
    if(i % 2 == 0){
        console.log(names[i])
    }
}

// classwork 8
let numbersTill50 = []
for(let i = 0; i <= 50; i += 1){
    numbersTill50[i] = i
}
console.log(numbersTill50)

//classwork 9

function searchForIndex(keyword , array){
    for (let i = 0; i < array.length; i += 1){
        if (array[i] == keyword){
            console.log(i)
        }
        else if(array[i] != keyword){
            console.log(-1)
        }
    }
}
searchForIndex("nika" , names)