class Bank:
    def __init__(self):
        self.accounts = {}

    def create_account(self, username, initial_balance):
        self.accounts[username] = initial_balance

    def deposit(self, username, amount):
        if username in self.accounts:
            self.accounts[username] += amount
            return True
        return False

    def withdraw(self, username, amount):
        if username in self.accounts and self.accounts[username] >= amount:
            self.accounts[username] -= amount
            return True
        return False

    def check_balance(self, username):
        return self.accounts.get(username, "Account not found")


def main():
    my_bank = Bank()

    while True:
        print("1. Create Account")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Check Balance")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            username = input("Enter a username: ")
            initial_balance = float(input("Enter initial balance: "))
            my_bank.create_account(username, initial_balance)
            print(f"Account for {username} created with an initial balance of {initial_balance}")

        elif choice == '2':
            username = input("Enter your username: ")
            amount = float(input("Enter the deposit amount: "))
            if my_bank.deposit(username, amount):
                print(f"Deposited {amount} into {username}'s account")
            else:
                print("Account not found")

        elif choice == '3':
            username = input("Enter your username: ")
            amount = float(input("Enter the withdrawal amount: "))
            if my_bank.withdraw(username, amount):
                print(f"Withdrew {amount} from {username}'s account")
            else:
                print("Insufficient funds or account not found")

        elif choice == '4':
            username = input("Enter your username: ")
            balance = my_bank.check_balance(username)
            print(f"{username}'s balance: {balance}")

        elif choice == '5':
            print("Thanks for using the bank system. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 5.")


if __name__ == "__main__":
    main()
