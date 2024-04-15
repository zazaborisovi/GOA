#homework N1
var1 = 5
var2 = 10
print(var1 + var2)
print(var1 - var2)
print(var1 * var2)
print(var1 / var2)
print(var1 // var2)
#homework N2
booksN1 = 50
booksN2 = 50
discountN1 = (10 / 100) * booksN1
booksN1 -= discountN1
print("first five books cost: " + str(booksN1) + " with discount of: " + str(discountN1))
discountN2 = (20 / 100) * booksN2
booksN2 -= discountN2
print("second five books cost: " + str(booksN2) + " with discount of: " + str(discountN2))
#homework N3
age = int(input("write your age and system will print your age after 25 years: "))
print(age + 25)
#homework N4
user_information1 = input("your name: ")
user_information2 = input("your surname: ")
user_information3 = int(input("your age: "))
user_information4 = input("city you live in: ")
print("your full name is: " + user_information1 + user_information2 + "your age is: " + str(user_information3) + "you live in city called: " + user_information4)
#homework N5
number = int(input("choose a number and program will tell you if its odd or even: "))
if number % 2 == 0:
    print("number is even")
else:
    print("number is odd")