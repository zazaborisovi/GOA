const btn = document.getElementById("create")
const ul = document.getElementsByTagName("ul")

btn.addEventListener("click" , function(){
    let li = document.createElement("li")
    let p = document.createElement("p")
    let text = document.getElementById("toDoText").value
    let delBtn = document.createElement("button")


    p.textContent = text
    delBtn.className = "del"
    delBtn.textContent = "Delete"

    li.appendChild(p)
    li.appendChild(delBtn)

    ul[0].appendChild(li)

    p.addEventListener("click" , function(){
        if (p.style.textDecoration != "line-through"){
            p.style.textDecoration = "line-through"
        }
        else{
            p.style.textDecoration = "none"
        }
        
    })
    delBtn.addEventListener("click" , function(){
        ul[0].removeChild(li)
    })
})
