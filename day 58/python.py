arr = [5 , 10 , 15 , 1]

min_number = arr[0]

for i in arr:
    if i < min_number:
        min_number = i


def biggest_number_in_arr(arr):
    big_number = arr[0]
    for i in arr:
        if i > big_number:
            big_number = i

    return big_number

print(biggest_number_in_arr([5 , 19 , 20 , 4]))
print(biggest_number_in_arr([4 , 8 , 19 , 2]))
print(biggest_number_in_arr([-1 , -15 , 0]))