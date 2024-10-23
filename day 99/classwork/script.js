import { arr1 } from "./data/arrayindex1.js"
import { handlearr } from "./data/function.js"
import * as arrays from "./data/arrays.js" // <- imports every export from file
import { arrWith3elements } from "./modules/3elementarr.js"
console.log(arr1)
handlearr(arr1)
console.log(arrays.newarr1)
console.log(arrays.newarr2)
console.log(arrWith3elements)

let mappingarr = [1 , 2 , 3].map((item , index) =>(
    [item, index]
))

console.log(mappingarr)

let mappingarr1 = [1,2,3,4,5,6].map((item,index)=>(  //returns true or false
    item % 2 == 0
))
let arrfilter = [1,2,3,4,5,6].filter((item,index)=>(  //returns numbers
    item % 2 == 0
))
console.log(mappingarr , mappingarr1)

let findhigher = [1,2,3,4,5].find(x => x > 3) //returns closest number that is higher than 3
let findindex = [1,2,3,4,5].findIndex(x => x > 3) //returns closest of the firstest number that is higher than 3
let arrjoin = [1,2,3,4,5].join("...")
console.log(findhigher ,findindex)
console.log(arrjoin)