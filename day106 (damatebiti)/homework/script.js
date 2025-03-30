const { mkdirSync , rmdirSync , writeFileSync , unlinkSync } = require("fs")
const path = 'c:/Users/x/Desktop/New folder/GOA/day 102/homework/folder for mkdir script'

function mkdirs(){
    for (let i = 1 ; i <= 10 ; i ++){
        mkdirSync(`${path}/directory ${i}`)
        writeFileSync(`${path}/directory ${i}/classwork.txt` , "")
        writeFileSync(`${path}/directory ${i}/homework.txt` , "")
        console.log(`directory ${i} created with homework and classwork files inside`)
    }
}
function rmdirs(){
    for(let i = 1 ; i <= 10 ; i ++){
        unlinkSync(`${path}/directory ${i}/classwork.txt`);
        unlinkSync(`${path}/directory ${i}/homework.txt`);
        rmdirSync(`${path}/directory ${i}`);
        console.log(`directory ${i} deleted`)
    }
}
mkdirs()