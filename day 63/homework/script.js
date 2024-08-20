let display = document.getElementById("display")
let balance = 0

function depositMoney(){
    let inputValue = document.getElementById("deposit")
    let depositValue = Number(inputValue.value)

    balance += depositValue
    display.textContent = balance

    inputValue.value = ""
}
function witdrawMoney(){
    let inputValue = document.getElementById("witdraw")
    let witdrawValue = Number(inputValue.value)

    if (witdrawValue => 0 && witdrawValue <= balance) {
        balance -= witdrawValue;

        let display = document.getElementById("display");
        display.textContent = balance;

        inputValue.value = "";
    } else {
        alert("Invalid withdrawal amount. Please enter a valid amount.");
    }

    inputValue.value = ""
}