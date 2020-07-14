function insertionSort(arr) {
  let i
  let j
  const array = [...arr]

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      // if next item is less than current, swap them.
      if (array[i] < array[j]) {
        // cut 1 item at i-index
        const [item] = array.splice(i, 1)
        // insert cut item at j-index (the laggard)
        array.splice(j, 0, item)
      }
    }
  }
  return array
}

const test = [10, 6, 4, 7, 2, 5, 3, 1, 8, 0, 9]

const output = insertionSort(test)

console.log(test)
console.log(output)
