# num_1 = int(input("enter any number: "))
# num_2 = int(input("enter any number: "))

# print(num_1 / num_2)
# print(num_1 * num_2)
# print(num_1 + num_2)
# print(num_1 - num_2)
# print(num_1 % num_2)

#1
side1 = int(input("side 1: "))
side2 = int(input("side 2: "))
side3 = int(input("side 3: "))

if (side1 + side2 < side3) or (side2 + side3 < side1) or (side1 + side3 < side2):
    print("this triangle will not be created")
else:
    print("this triangle will be created")

#2
def addition(a, b):
    return a + b

def substraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b != 0:
        return a / b
    else:
        return "cant divide to 0"


#3
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

num1 = 5
num2 = 10
num3 = num1 + num2
print(num3)
num3 = num1 - num2
print(num3)
num3 = num1 * num2
print(num3)
