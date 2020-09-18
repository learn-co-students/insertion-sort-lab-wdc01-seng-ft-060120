function findMinAndRemove(array){
  let minimum = array[0]
  let index = 0

  for (let i=1; i<array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
      index = i
    }
  }

  return array.splice(index, 1)[0]
}

function selectionSort(array){
  let sortedArray = [];
  let minimum;

  while (array.length !== 0) {
    sortedArray.push(findMinAndRemove(array))
  }

  return sortedArray
}
