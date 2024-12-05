const { error } = require("console")
const {readFileSync , writeFileSync, mkdirSync} = require("fs")

writeFileSync("./test.js" , "console.log('hello world')" , (err) =>{
    if(err) throw err
})
writeFileSync(`./goa.txt` , `goa magaria` , (err)=>{
    if(err) throw err
})
readFileSync("./goa.txt" , "utf-8" , (err) => {
    if(err)throw err
})
mkdirSync(`directories`)
mkdirSync(`./directories/directory1`)
mkdirSync(`./directories/directory2`)