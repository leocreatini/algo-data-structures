// Returns index of item in a sorted array.
function binarySearch(value, array) {
  // create lower and upper bounds of search
  // get mid point between these boundaries
  let lowerIndex = 0
  let middleIndex = Math.floor(array.length / 2)
  let upperIndex = array.length - 1

  // Guard against values outside highest and lowest boundaries.
  if (value > array[upperIndex] || value < array[lowerIndex]) {
    return -1
  }

  // keep decreasing the problem space until it finds the index of the queried value,
  // or the boundaries are next to each other, and thus hasn't found it.
  while (upperIndex - lowerIndex) {
    // console.log(lowerIndex, middleIndex, upperIndex)
    if (array[lowerIndex] === value) return lowerIndex
    if (array[middleIndex] === value) return middleIndex
    if (array[upperIndex] === value) return upperIndex

    if (value < array[middleIndex]) {
      upperIndex = middleIndex
      lowerIndex++
      middleIndex = Math.floor((upperIndex + lowerIndex) / 2)
    } else {
      lowerIndex = middleIndex
      upperIndex--
      middleIndex = Math.floor((upperIndex + lowerIndex) / 2)
    }
  }

  // Default: if not in array, pass -1
  return -1
}

function assert(name, expected, result) {
  console.log(expected === result ? `Passed: ${name}` : `Failed: ${name}`, result)
}

const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const expected1 = 10
const result1 = binarySearch(11, sortedNumbers)
assert('Should find existing number in ordered list.', expected1, result1)

const expected2 = -1
const result2 = binarySearch(100, sortedNumbers)
assert('Should not find number in ordered list.', expected2, result2)

function isSorted(array) {
  return (
    array.filter((item, i) => item < array[i + 1] || i === array.length - 1).length === array.length
  )
}
console.log(isSorted(sortedNumbers))
