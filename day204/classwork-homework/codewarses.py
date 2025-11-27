def pig_it(text):
    text = text.split()
    res = []
    for i in text:
        if i.isalpha():
            res.append(i[1:] + i[0] + "ay")
        else:
            res.append(i)
    return " ".join(res)

def max_sequence(arr):
    maxSum = 0
    currentSum = 0
    
    for i in arr:
        currentSum = max(i, currentSum + i)
        maxSum = max(maxSum , currentSum)
        
    return maxSum

def max_sequence(arr):
    maxSum = 0
    currentSum = 0
    
    for i in arr:
        currentSum = max(i, currentSum + i)
        maxSum = max(maxSum , currentSum)
        
    return maxSum

def score(dice):
    dic = {i: dice.count(i) for i in range(1,7)}
    score = 0
    
    score += (dic[1] // 3) * 1000
    dic[1] %= 3
    score += (dic[6] // 3) * 600
    dic[6] %= 3
    score += (dic[5] // 3) * 500
    dic[5] %= 3
    score += (dic[4] // 3) * 400
    dic[4] %= 3
    score += (dic[3] // 3) * 300
    dic[3] %= 3
    score += (dic[2] // 3) * 200
    dic[2] %= 3
    score += dic[1] * 100
    score += dic[5] * 50
    
    return score

def prime_factors(n):
    factor = 2
    res = ""
    while factor * factor <= n:
        count = 0
        while n % factor == 0:
            n //= factor
            count += 1
        if count:
            if count == 1:
                res += f"({factor})"
            else:
                res += f"({factor}**{count})"
        factor += 1
    if n > 1:
        res += f"({n})"
    return res