import random
def operations():
    a , b = random.randint(1 , 9) , random.randint(1 , 9)
    if True:
        answer = int(input(f"{a} * {b} = "))
        if answer == a * b:
            print("correct")
            operations()
        else:
            print(f"incorrect answer is: {a * b}")
            operations()
operations()