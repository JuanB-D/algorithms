import random

lista = [1, 2, 3, 4, 5]
history = []
def fisher_yates_shuffle(array):
    for i in range(len(array) -1, 0, -1):
        j = random.randint(0, i)
        array[i], array[j] = array[j], array[i]
        step = array[:]
        history.append(step)
    return array


print(fisher_yates_shuffle(lista))
print(history)

# complejidad O(n)

    