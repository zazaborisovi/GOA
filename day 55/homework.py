num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Addition
addition = num1 + num2
print("Addition Result:", addition)

# Subtraction
subtraction = num1 - num2
print("Subtraction Result:", subtraction)

# Multiplication
multiplication = num1 * num2
print("Multiplication Result:", multiplication)

# Division
if num2 != 0:
    division = num1 / num2
    print("Division Result:", division)
else:
    print("Cannot divide by zero.")