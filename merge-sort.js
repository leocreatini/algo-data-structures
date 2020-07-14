// sorts an array by first splitting down to subarrays with length no greater than 2.
// then compares values and builds up arrays by merging the subarrays in order.
// uses recursion to complete this process.

function mergeSort(array) {
  // break down array when size is 2 or more, else return the subarray of 1.
  if (array.length < 2) {
    return array
  }
  // when array has 2+ items, find middle index and split into right and left subarrays
  const middleIndex = Math.floor(array.length / 2)
  const leftSubArray = array.slice(0, middleIndex)
  const rightSubArray = array.slice(middleIndex)

  return merge(mergeSort(leftSubArray), mergeSort(rightSubArray))
}

function merge(left, right) {
  const sorted = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  const results = [...sorted, ...left, ...right]
  console.log(results)
  return results
}

module.exports.mergeSort = mergeSort

// const numbers = [10, 5, 2, 6, 3, 1, 9, 7, 4, 8]

// mergeSort(numbers)
// -----------------------
// [5, 10]
// [3, 6]
// [2, 3, 6]
// [2, 3, 5, 6, 10]
// [1, 9]
// [4, 8]
// [4, 7, 8]
// [1, 4, 7, 8, 9]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
