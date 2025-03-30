function createAccount(){
    let div1 = document.getElementById("div1")
    let div2 = document.getElementById("div2")
    let accountRequirements = {
        username: Boolean(document.getElementById("username").value),
        age: Boolean(document.getElementById("age").value),
        birthDate: Boolean(document.getElementById("birthDate").value),
    }
    let account = {
        username: document.getElementById("username").value,
        age: document.getElementById("age").value,
        birthDate: document.getElementById("birthDate").value,
    }
    let accUsername = document.getElementById("accUsername")
    accUsername.textContent = account.username
    let accAge = document.getElementById("accAge")
    accAge.textContent = account.age
    let accBirthDate = document.getElementById("accBirthDate")
    accBirthDate.textContent = account.birthDate

    console.log(accountRequirements.username)
    console.log(accountRequirements.age)
    console.log(accountRequirements.birthDate)

    if (accountRequirements.username && accountRequirements.age && accountRequirements.birthDate) {
        div1.style.visibility = "hidden";
        div2.style.visibility = "visible"
    }
}