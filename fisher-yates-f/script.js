const list = [1, 2, 3, 4, 5];
const history = [];
function listSort(array){
    for(let i = 0; i < array.length; i++){
        let randomIndex = Math.floor(Math.random() * array.length);
        let current = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = current;
        let step = [...array]
        history.push(step)
    }
    return array;
}


console.log(listSort(list));
console.log(history);

//complejidad 0(n^2)