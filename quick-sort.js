function quickSort(array) {
  // base case: when array is smaller than 2, just return it.
  if (array.length < 2) {
    return array
  }

  // get pivot point, the last item in array
  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  // run through array, if less than pivot value, put on left array, else right array
  for (let i = 0; i < pivotIndex; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  // recursively divide and conquor each left and right subarrays until atomic.
  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports.quickSort = quickSort

// const test = [10, 5, 8, 2, 3, 9, 6, 1, 4, 7]

// const output = quickSort(test)

// console.log(output)

// -------------------------------
// pivot = 7
// left = [5, 2, 3, 6, 1, 4]
// right = [10, 8, 9]

// pivot = 4
// left = [2, 3, 1]
// right = [5, 6]

// pivot = 1
// left = []
// right = [2, 3]

// pivot = 3
// left = [2]
// right = []

// pivot = 6
// left = [5]
// right = []

// [2, *3*]
// [*1*, 2, 3]
// [5, *6*]

// [1, 2, 3, *4*, 5, 6]

// pivot = 9
// left = [8]
// right = [10]

// [8, *9*, 10]

// [1, 2, 3, 4, 5, 6, *7*, 8, 9, 10]
