def bool_to_word(boolean):
    return "Yes" if boolean else "No"

def remove_char(s):
    return s[1 : len(s) - 1]

def string_to_number(s):
    return int(s)

def sum_array(a):
    return sum(a)

def no_space(x):
    return "".join(x.split())

def simple_multiplication(number) :
    return number * 8 if number % 2 == 0 else number * 9

def invert(lst):
    return [i * -1 for i in lst]

def fake_bin(x):
    b = ""
    for i in x:
        b += "0" if int(i) < 5 else "1"
    return b

def string_to_array(s):
    return s.split() if len(s) > 0 else [""]

def rps(p1, p2):
    arr = [("rock", "scissors"), ("scissors", "paper"), ("paper", "rock")]
    if (p1 , p2) in arr:
        return "Player 1 won!"
    return "Draw!" if p1 == p2 else "Player 2 won!"