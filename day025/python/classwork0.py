x = float(input("first number: "))
y = float(input("second number: "))

#giving user of code choise for what kind of mathematical decision machine needs to make
option = int(input("choose one option ( 1 for add , 2 for substract , 3 for multiply , 4 for divide)"))

#making if statment so if user of code chooses any of the options they will get answer they need
if option == 1:
    add = print(float(x + y))
elif option == 2:
    substract = print(float(x - y))
elif option == 3:
    multiply = print(float(x * y))
elif option == 4:
    divide = (float(x / y))
else:
    print("please choose option from above")