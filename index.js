function findMinAndRemove(array){
    let minimum = array[0]
    let index = 0 

    for(let i = 0; i < array.length; i++){
        if(array[i] < minimum){
            minimum = array[i]
            index = i
        }
    }
    return array.splice(index, 1)[0]
}

function selectionSort(array){
    let sortedArray = [];

    while (array.length !== 0){
        sortedArray.push(findMinAndRemove(array))
    }

    return sortedArray

}
