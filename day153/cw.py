def count_by(x, n):
    results = []
    i = 1
    while i <= n:
        results.append(x * i)
        i += 1
    return results

def count_by2(x , n):
    return [i*x for i in range(n+1)]

def sum_mix(arr):
    i = 0
    sum = 0
    while i < len(arr):
        sum += int(arr[i])
        i += 1
    print(sum)
sum_mix([9 , 3 , "7" , "3"])