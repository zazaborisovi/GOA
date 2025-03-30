const {mkdirSync , err , rmdirSync, writeFileSync , unlinkSync, readFileSync} = require("fs")

const path = "./dirs"

function mkdirs() {
    for (let i = 1 ; i <= 10 ; i ++ ){
        mkdirSync(`${path}/directory ${i}`)
        writeFileSync(`${path}/directory ${i}/idk.js` , "console.log('ixvi')")
        console.log(`directory ${i} created`)
    }
}
function rmdirs(){
    for(let i = 1 ; i <= 10 ; i ++){
        unlinkSync(`${path}/directory ${i}/idk.js`);
        rmdirSync(`${path}/directory ${i}`);
        console.log(`directory ${i} deleted`)
    }
}
function readfiles(){
    for(let i = 1 ; i <= 10 ; i ++){
        console.log(readFileSync(`${path}/directory ${i}/idk.js` , "utf-8" , (err) =>{if(err) throw err}))
    }
}
readfiles()