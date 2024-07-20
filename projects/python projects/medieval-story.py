import random
extra = ""
weapon = ""
goblin1 = {"enemy": "goblin" , "hp": 15}
goblin2 = {"enemy": "goblin" , "hp": 15}
name = ""
player = {"name": name , "hp": 20}
enemies = []


def swordDamage(goblin): #swordDamage if user chooses sword
    goblin["hp"] -= random.randint(5, 10) #random number between 5-10 (damage)
    if goblin["hp"] <= 0: 
        enemies.remove(goblin) #if enemies hp goes down to 0 or it becomes less then 0 enemy gets removed from the list


def daggersDamage(goblin):
    goblin["hp"] -= random.randint(1, 5) #random number between 1-5 (damage)
    goblin["hp"] -= random.randint(1, 5) #2nd random number since you strike twice with daggers
    if goblin["hp"] <= 0:
        enemies.remove(goblin) #if enemies hp goes down to 0 or it becomes less then 0 enemy gets removed from the list


def playerDamage(player):
    player["hp"] = player["hp"] - random.randint(1, 5)


def fight1(): #first fight
    print(f"\n{enemies}") #prints the enemies list to show how many enemies you have left and how many hp they have left
    a = int(input(f"1.attack\n2.use {extra} \n:"))
    if a == 1 and weapon[0] == "S": #"S" short version of sword to make code simpler and smaller
        x = int(input("\nwhich enemie to attack: "))
        x -= 1
        swordDamage(enemies[x])
        fight1()
    elif a == 1 and weapon[0] == "D": #"D" short version of sword to make code simpler and smaller
        x = int(input("\nwhich enemie to attack: "))
        x -= 1 #user will choose either 1 or 2 since there are 2 enemies but first enemy will be on index of 0 so when user chooses 1 program makes it 0 to access first enemy
        daggersDamage(enemies[x])
        fight1()


def character(): #creating function for character creation
    global name 
    print("you are old guard living in a peacful village \nwhen one day village gets attacked by goblins") #little back-story
    name = input("\nchoose ur name: ")
    x = int(input("\n\nchoose your weapon: \n1.Sword(can be used with shield DMG: 5-10) \n2.Daggers(you strike first and strike twice DMG: 1-5)\n1/2: ")) #weapon choosing system
    global extra
    global weapon
    if x == 1: #1 for sword
        y = int(input("\n\nchoose extra: \n1.shield(absorbs attacks DMG: 1-10) \n2.healing(heals you up 1-8)\n1/2: "))
        weapon = "Sword"
        if y == 1:
            extra = "Shield"
        elif y == 2:
            extra = "Heal"
        else: #if number 1 or 2 has not been choosen returns user to character creation
            print("\n\nincorrect number please choose from the list\n\n")
            character()
    elif x == 2: #2 for daggers
        y = int(input("\n\nchoose extra: \n1.rock throw(throw rock to enemies to deal DMG: 1-2) \n2.healing(heals you up 1-8)\n1/2: ")) #extra choosing system
        weapon = "Daggers"
        if y == 1:
            extra = "Rock Throw"
        elif y == 2:
            extra = "Heal"
        else: #if number 1 or 2 has not been choosen returns user to character creation
            print("\n\nincorrect number please choose from the list\n\n")
            character()
    else: #if number 1 or 2 has not been choosen returns user to character creation
        print("\n\nincorrect number please choose from the list\n\n")
        character()
    print(f"\nyou chose {weapon} as a weapon \nand {extra} as an extra\n\nafter choosing your weapon and extra you go out to face goblins\n") #prints weapons you chose and a continuance of the story
    global enemies 
    enemies.append(goblin1) #adds 1st enemy on the list
    enemies.append(goblin2) #adds 2nd enemy on the list
    fight1() #continues to first fight


character()