const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

function binarySearch(arr, target){
    let left  = 0;
    let rigth = arr.length -1;
    while(left <= rigth){
    let mid = Math.floor((left + rigth) / 2)

    if(arr[mid] === target){
        return mid;
    } else if(arr[mid] < target){
        left = mid +1;
    }else{
        rigth = mid-1
    }

    }

    return -1
}

const result = binarySearch(list, target);
console.log(result)

// complejidad O(log n)

