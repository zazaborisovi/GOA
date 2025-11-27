negatives = open("day184/cw3/negatives.txt" , "w")
positives = open("day184/cw3/positives.txt" , "w")

with open("C:/Users/x/Desktop/New folder/GOA/day184/cw3/numbers.txt" , "r") as file:
    for i in file:
        intNum = int(i)
        if intNum < 0:
            negatives.write(i)
            print(f"{i.strip()} added in negatives")
        else:
            positives.write(i)
            print(f"{i.strip()} added in positives")
