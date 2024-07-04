// for(let i = 1; 10 >= i; i++){
//     if(i % 2 === 0){
//         console.log(i + " is even")
//     }
//     else{
//         console.log(i + " is odd")
//     }
// }

let isCorrect = false
const password = "123"
while (isCorrect != true){
    userPassword = prompt("password")
    if (userPassword == password){
        alert("your password is correct")
        isCorrect = true
    }
    else{
        alert("your password is incorrect")
    }
}