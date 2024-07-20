import random
extra = ""
weapon = ""
coing_bag = 0
goblin1 = {
    "enemy": "goblin",
    "hp": 15
}
goblin2 = {
    "enemy": "goblin",
    "hp": 15
}
goblin_boss = {
    "enemy": "goblin boss",
    "hp:": 25
}
player = {
    "name": str(input("\nchoose ur name: ")),
    "hp": 35,
    "shield": 0,
}
enemies = []


def sword_damage(goblin):
    goblin["hp"] -= random.randint(5, 10)
    if goblin["hp"] <= 0: 
        enemies.remove(goblin)


def daggers_damage(goblin):
    goblin["hp"] -= random.randint(1, 5)
    goblin["hp"] -= random.randint(1, 5)
    if goblin["hp"] <= 0:
        enemies.remove(goblin)


def player_heal(player):
    player["hp"] += random.randint(1, 8)


def shield(player):
    player["shield"] += random.randint(1,8)


def goblin_damage(player):
    dmg = random.randint(1, 5)
    dmg_on_shield = random.randint(1, 8)
    if player["shield"] > 0:
        player["shield"] -= dmg_on_shield
    else:
        player["hp"] -= dmg
    if player["hp"] <= 0:
        print("you have died")
        death()


def goblin_boss_damage(player):
    dmg = random.randint(5, 10)
    dmg_on_shield = random.randint(6, 11)
    if player["shield"] > 0:
        player["shield"] -= dmg_on_shield
    else:
        player["hp"] -= dmg
    if player["hp"] <= 0:
        print("you have died")
        death()


def death():
    x = int(input("1 to play again \n2 to end the game "))
    if x == 1:
        character()
    elif x == 2:
        print("game ended")
    else:
        print("incorrect number please choose from the list")
        death()


def playerGui():
    global coing_bag
    a = int(input(f"1.attack\n2.use {extra} \n:"))
    if a == 1 and weapon[0] == "S": #sword
        x = int(input("\nwhich enemy to attack: "))
        x -= 1
        sword_damage(enemies[x])
        if coing_bag == 0:
            fight1()
        elif coing_bag == 1:
            fight2()
    elif a == 1 and weapon[0] == "D": #daggers
        x = int(input("\nwhich enemy to attack: "))
        x -= 1
        daggers_damage(enemies[x])
        if coing_bag == 0:
            fight1()
        elif coing_bag == 1:
            fight2()
    elif a == 2 and extra[0] == "S": #shield
        shield(player)
        if coing_bag == 0:
            fight1()
        elif coing_bag == 1:
            fight2()


def fight2():
    print(enemies)


def fight1():
    global coing_bag
    print(f"\n{enemies}\n")
    print(player)
    if len(enemies) > 0:
        goblin_damage(player)
    if len(enemies) != 0:
        playerGui()
    elif len(enemies) == 0 and coing_bag == 0:
        print("you checked goblins for the loot and they had coin bag")
        coing_bag += 1
        enemies.append(goblin1)
        enemies.append(goblin2)
        enemies.append(goblin_boss)
        fight2()


def character():
    print("you are old guard living in a peacful village \nwhen one day village gets attacked by goblins")
    x = int(input("\n\nchoose your weapon: \n1.Sword(can be used with shield DMG: 5-10) \n2.Daggers(you strike first and strike twice DMG: 1-5)\n1/2: "))
    global extra
    global weapon
    if x == 1:
        y = int(input("\n\nchoose extra: \n1.shield(absorbs attacks DMG: 1-10) \n2.healing(heals you up 1-8)\n1/2: "))
        weapon = "Sword"
        if y == 1:
            extra = "Shield"
        elif y == 2:
            extra = "Heal"
        else:
            print("\n\nincorrect number please choose from the list\n\n")
            character()
    elif x == 2:
        y = int(input("\n\nchoose extra: \n1.rock throw(throw rock to enemies to deal DMG: 1-2) \n2.healing(heals you up 1-8)\n1/2: "))
        weapon = "Daggers"
        if y == 1:
            extra = "Rock Throw"
        elif y == 2:
            extra = "Heal"
        else:
            print("\n\nincorrect number please choose from the list\n\n")
            character()
    else:
        print("\n\nincorrect number please choose from the list\n\n")
        character()
    print(f"\nyou chose {weapon} as a weapon \nand {extra} as an extra\n\nafter choosing your weapon and extra you go out to face goblins\n")
    enemies.append(goblin1)
    enemies.append(goblin2)
    fight1()


character()