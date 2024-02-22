def abbrev_name(name):
    words = name.split()
    first_letter1 = words[0][0]
    first_letter2 = words[-1][0]
    return first_letter1 + '.' + first_letter2

print(abbrev_name("Sandro Zabakhidze"))