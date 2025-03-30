def names():
    name1 = input('name 1 : ')
    name2 = input('name 2 : ')
    name3 = input('name 3 : ')
    list = [name1 , name2 , name3]
    print(list)
    without_list = ' '.join(list)
    print(without_list)

names()
