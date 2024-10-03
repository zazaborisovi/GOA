// const promiseFunction = (arr) =>{
//     return new Promise( (resolve , reject) => {
//         if(arr.length >= 6){
//             reject(Error("it has more than 6 characters"))
//         }
//         setTimeout(() => {
//             resolve(arr)
//         }, 100)
//     })
// }
// promiseFunction([1 , 4 , 2 , 3 , 6 , 7 , 8])
// .then((res) =>{
//     console.log(res)
// })
// promiseFunction([1 , 2 , 3 , 4])
// .then((res) =>{
//     console.log(res)
// })

// iterators and generators

function* generating() {
    let i = 0
    while(true){
        yield i ++
    }
}
const indexGenerator = generating()
console.log(indexGenerator.next())
console.log(indexGenerator.next())
console.log(indexGenerator.next())
console.log(indexGenerator.next())