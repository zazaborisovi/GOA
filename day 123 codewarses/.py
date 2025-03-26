def remove_duplicate_words(s):
    arr = s.split()
    newarr = []
    for word in arr:
        if word not in newarr:
            newarr.append(word)
    return " ".join(newarr)

def stray(arr):
    numtoreturn = 0
    for num in arr:
        if arr.count(num) == 1:
            numtoreturn = num
    return numtoreturn