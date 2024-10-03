function* Generator(){
    let i = 0
    while(true){
        yield i ++
    }
}
const generator = Generator()
console.log(generator.next().value)
console.log(generator.return(10).value)

function* evenGenerator(){
    let i = 0
    while(true){
        yield i += 2
    }
}
const evenNumbers = evenGenerator()
console.log(evenNumbers.next().value)
console.log(evenNumbers.next().value)

function* randomGenerator(){
    while(true){
        let i = Math.random()
        yield i
    }
}
const randomNums = randomGenerator()
console.log(randomNums.next().value)
console.log(randomNums.next().value)

function* wordSlicer(str){
    let i = 0
    while(true){
        yield str[i]
        i ++
    }
}
const words = wordSlicer("hello")
console.log(words.next().value)
console.log(words.next().value)
console.log(words.next().value)
console.log(words.next().value)
console.log(words.next().value)

function* randomPasswordGenerator(){
    while(true){
        let password = ""
        while(password.length < 8){
            randomnumber = String(Math.floor(Math.random()* 9))
            password += randomnumber
        }
        yield password
    }
}
const password = randomPasswordGenerator()
console.log(password.next().value)

function* randomPasswordWithLanguages(){
    let languages = "abcdefghijklmnopqrstuvwxyzაბგდევზთიკლმნოპჟრსტყხჯშჰჭ".split("")
    while(true){
        let password = ""
        while (password.length < 8){
            randomIndex = Math.floor(Math.random() * languages.length)
            password += languages[randomIndex]
        }
        yield password
    }
}
let passwordP2 = randomPasswordWithLanguages()
console.log(passwordP2.next())