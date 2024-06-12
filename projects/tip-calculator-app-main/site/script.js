let bill = 0
let userValue = 0
let customValue = 0
function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      let billValue = document.getElementById("billAmount").value
      let numOfPeople = document.getElementById("usrValue").value
      let customPercentageValue = document.getElementById("custom").value
      bill = billValue
      userValue = numOfPeople
      customValue = customPercentageValue
    }
}
function tipCalculator(value){
    let total = document.getElementById("totalTipAmount")
    let onEach = document.getElementById("totalTipOnPerson")
    let bill = document.getElementById("billAmount").value
    let userValue = document.getElementById("usrValue").value

    if(bill > 0 && userValue >0){
    total.textContent = parseFloat((value / 100) * bill).toFixed(2)
    onEach.textContent = parseFloat((value / 100) * bill / userValue).toFixed(2)        
    }
}
function reset(){
    bill = 0
    userValue = 0
    customValue = 0
    document.getElementById("totalTipAmount").textContent = 0
    document.getElementById("totalTipOnPerson").textContent = 0
    document.getElementById("billAmount").value = ""
    document.getElementById("usrValue").value = ""
    document.getElementById("custom").value = ""
}
