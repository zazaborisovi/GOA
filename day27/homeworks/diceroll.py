import random

def roll_dice():
    return random.randint(1, 6)


pname = input("your name here: ")
pinput = input("press enter to roll the dice ")

player_dice = roll_dice()
computer_dice = roll_dice()

print(pname +" rolled:" + str(player_dice))
print("computer rolled:" + str(computer_dice))

if player_dice > computer_dice:
    print(pname + " WON")
elif player_dice == computer_dice:
    print("its a tie")
else:
    print(pname + " LOST")

