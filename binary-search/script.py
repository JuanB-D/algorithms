array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7

def binary_search(arr, target):
    left = 0
    rigth = len(arr) -1

    while left <= rigth:
        mid  = (left + rigth) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid +1
        else:
            rigth = mid -1

    return -1

print(binary_search(array, target))

# complejidad O(log n)

