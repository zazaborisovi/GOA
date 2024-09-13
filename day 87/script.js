let add = document.getElementById("add")
let color = document.getElementById("color")
let mainContainer = document.getElementsByClassName("main-container")[0]

add.addEventListener("click" , handleAdd)

let nX = 0
let nY = 0
let oX = 0
let oY = 0



let newBox = document.createElement("div")
let del = newBox.querySelector("#del")

function handleAdd(){
    newBox.innerHTML = `
    <form action="" class="box-container">
        <div class="box-value">
            <button id="del" type="button">del</button>
        </div>
        <textarea name="textarea" id="textarea" placeholder="Enter your text here"></textarea>
    </form>
    `
    const boxV = newBox.querySelector(".box-value")
    const boxC = newBox.querySelector(".main-container")
    const deleteBox = newBox.querySelector("#del")
    const txtArea = newBox.querySelector("#textarea")
    txtArea.style.background = color.value
    mainContainer.appendChild(newBox)
    deleteBox.addEventListener("click" , handleRemove)
    
    function handleRemove(){
        boxC.parentElement.remove()
    }
    boxV.addEventListener("mousedown" , handleMouseDown)
    function handleMouseDown(e){
        e.preventDefault()
        oX = e.clientX
        oY = e.clientY

        document.addEventListener("mousemove" , handleMove)
        document.addEventListener("mouseup" , handleMoveUp)

        function handleMove(e){
            e.preventDefault()

            nX = oX - e.clientX
            nY = oY - e.clientY

            boxC.style.top = (boxC.getBoundingClientRect().top - nY) + "px"
            boxC.style.left = (boxC.getBoundingClientRect().left - nX) + "px"

            oX = e.clientX
            oY = e.clientY
        }

        function handleMoveUp(){
            document.removeEventListener("mousemove" , handleMove)
            document.removeEventListener("mouseup" , handleMoveUp)
        }
    }
}