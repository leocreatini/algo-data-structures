function bubbleSort(array) {
  const sorted = [...array]

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1; j++) {
      const next = j + 1
      if (sorted[j] > sorted[next]) {
        const temp = sorted[j]
        sorted[j] = sorted[next]
        sorted[next] = temp
      }
    }
    console.log(sorted)
  }

  return sorted
}

function assert(expected, result) {
  return JSON.stringify(expected) === JSON.stringify(result) ? 'Passed' : 'Failed'
}

const list = [5, 10, 6, 2, 8, 3, 1, 9, 7, 4]
console.log(list)
const result = bubbleSort(list)
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testResult = assert(expected, result)
console.log(testResult, result)
