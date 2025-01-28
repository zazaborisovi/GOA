def problem1(a , b ,c):
    if b > a and (b % c == 0 or a % c == 0):
        return (b-a) // c + 1
    else:
        return (b-a) // c