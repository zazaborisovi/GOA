file = open('C:/Users/x/Desktop/New folder/GOA/day184/test.txt' , 'r')

# print(file.read())

newArr = []

for i in file:
    newArr.append(i.strip())

file.close()

print(newArr)