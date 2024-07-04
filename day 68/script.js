let car = {
    brand: "brand",
    model: "model",
    currentSpeed: 10,
    maxSpeed: 200,
    accelerate: function(){
        if (this.currentSpeed < this.maxSpeed){
            this.currentSpeed += 10
        }
        else if(this.currentSpeed >= this.maxSpeed){
            this.currentSpeed = this.maxSpeed
            console.log("current speed is max")
        }
    },
    decelerate: function(){
        if (this.currentSpeed > 0) {
            this.currentSpeed -= 10;
            if (this.currentSpeed < 0) {
                this.currentSpeed = 0;
            }
        }
        else if (this.currentSpeed == 0) {
            console.log("The car is at a complete stop.");
        }
    },
}
car.accelerate()
console.log(car)

function Car(model, currentSpeed, maxSpeed) {
    this.model = model
    this.currentSpeed = currentSpeed
    this.maxSpeed = maxSpeed

    this.accelerate = function() {
        if (this.currentSpeed < this.maxSpeed) {
            this.currentSpeed += 10
            if (this.currentSpeed > this.maxSpeed) {
                this.currentSpeed = this.maxSpeed
            }
        }
        if (this.currentSpeed === this.maxSpeed) {
            console.log("The car is at its maximum speed!")
        }
    };

    this.decelerate = function() {
        if (this.currentSpeed > 0) {
            this.currentSpeed -= 10
            if (this.currentSpeed < 0) {
                this.currentSpeed = 0
            }
        }
        if (this.currentSpeed == 0) {
            console.log("The car is at a complete stop.")
        }
    }
    this.printInfo = function() {
        console.log("model: " + model + "current speed: " + currentSpeed + "max speed: " + maxSpeed)
    }
}
car1 = new Car("model1" , 0 , 200)
car1.printInfo()