const {mkdirSync , rmdirSync} = require("fs")

const mkdirsFunc = () => {
    for(let i = 0 ; i <= 10 ; i ++){
        mkdirSync(`./directories/directory ${i}`)
        console.log(`directory ${i} created`)
    }
}

const rmdirsFunc = () => {
    for(let i = 0 ; i <= 10 ; i ++){
        rmdirSync(`./directories/directory ${i}`)
        console.log(`directory ${i} removed`)
    }
}

mkdirsFunc()