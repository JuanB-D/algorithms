import random

lista = [1, 2, 3, 4, 5]

def fisher_yates_shuffle(array):
    for i in range(len(array) -1, 0, -1):
        j = random.randint(0, i)
        array[i], array[j] = array[j], array[i]
    return array


print(fisher_yates_shuffle(lista))

# complejidad O(n)

    