function build1(column){
    rows = ""
    for(let i = 0; i < column;i++){
        rows += "*"
        console.log(rows)
    }
}
build1(4)

console.log("-----------------")

function build2(column , row){
    for(let i = 0 ; i < column ; i++){
        let rows = ""
        for(let j = 0 ; j < row ; j++){
            rows += "*"
        }
        console.log(rows)
    }
}
build2(5 , 5)

console.log("------------")

build2(5 , 15)