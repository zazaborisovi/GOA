# file = open('C:/Users/x/Desktop/New folder/GOA/day184/testing2.txt' , 'r')

# oddArr = []
# evenArr = []

# for i in file:
#     if int(i) % 2 == 0:
#         evenArr.append(int(i))
#     else:
#         oddArr.append(int(i))

# print(f"oddArr: {oddArr} \nevenArr: {evenArr}")

# file.close()

with open('C:/Users/x/Desktop/New folder/GOA/day184/testing2.txt' , "r") as file:
    print(f"the file contains {len(file.read().split(" "))} words")
    file.write("\nnew string in file")