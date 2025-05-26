//homework 1
function isTeen(){
    let age = parseInt(document.getElementById("age").value)
    let permission = document.getElementById("permission").checked

    if (age < 14 && permission == true){
        permission = false
    }
    
    // or || example    
    if (age >= 18 || permission == true){
        console.log("you can have drivers license")
    }
    // and && example
    else if (age <= 18 && permission == true){
        console.log("you can have drivers license")
    }
    else{
        console.log("you can't have drivers license")
    }
}
//homework 2
function isValidCoupon(couponCode, totalAmount) {
    if (couponCode === "SALE" || couponCode === "BIGSALE") {
        return totalAmount >= 50
    } else if (couponCode === "LILSALE") {
        return true
    } else {
        return false
    }
}