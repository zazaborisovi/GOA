def triangle():
    print ('write how big your triangle sides you want to be: ')
    side1 = int(input('side 1: '))
    side2 = int(input('side 2: '))
    side3 = int(input('side 3: '))
    if side1 and side2 > side3 or side2 and side3 > side1 or side1 and side3 > side2:
        print('your triangle will be created')
    else:
        print('your triangle cant be created by that sizes you have writen')

triangle()