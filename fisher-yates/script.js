const list = [1, 2, 3, 4, 5];
const history = [];
function fisherYatesShuffle(array){
    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]];
        let step = [...array]
        history.push(step)
    }
    return array;
}

console.log(fisherYatesShuffle(list));
console.log(history);

//complejidad O(n)