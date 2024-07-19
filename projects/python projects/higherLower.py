import random
def higher_lower():
    x = int(input("your number: "))
    y = random.randint(1 , 10)
    print("computers number: " , y)
    if x > y:
        print("you won")
    else:
        print("computer won")
    z = input("want to continue?\n y/n: ")
    if z == "y":
        higher_lower()

higher_lower()
