tasks = []
def add_tasks():
    task = input("task to add: \n")
    tasks.append(task)
    print({task} , "has been added to task list")
    x = int(input("select 1 to go back to main menu 2 to exit: "))
    if x == 1:
        main()
    if x == 2:
        print("exiting the program")
    else:
        print("wrong number please input number from the list above")
        add_tasks()

def view_tasks():
    if not tasks:
        print("you have no tasks")
        main()
    else:
        print(tasks , " \n list of tasks you have")
    x = int(input("select 1 to go back to main menu 2 to exit: "))
    if x == 1:
        main()
    if x == 2:
        print("exiting the program")
    else:
        print("wrong number please input number from the list above")
        view_tasks()

def delete_tasks():
    if not tasks:
        print("you have no tasks")
        main()
    else:
        print(tasks)
        a = int(input("select task to delete: "))
        tasks.pop(a - 1)
        x = int(input("select 1 to go back to main menu 2 to exit 3 to delete another task: "))
        if x == 1:
            main()
        elif x == 2:
            print("exiting the program")
        elif x == 3:
            delete_tasks()
        else:
            print("wrong number please input number from the list above")
            delete_tasks()

def main():
    x = int(input("chose operation \n 1)add tasks \n 2) view tasks \n 3) delete tasks \n 4) exit \n : "))
    if x == 1:
        add_tasks()
    elif x == 2:
        view_tasks()
    elif x == 3:
        delete_tasks()
    elif x == 4:
        print("exiting the program")
    else:
        print("wrong number please input number from the list above")
        main()

main()