const { createQueue } = require('./queue')

function createPriorityQueue() {
  highPriorityQueue = createQueue()
  lowPriorityQueue = createQueue()

  return {
    enqueue(item, isImportant) {
      isImportant ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }
      return lowPriorityQueue.dequeue()
    },
    peak() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peak()
      }
      return lowPriorityQueue.peak()
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
    },
  }
}

exports.createPriorityQueue = createPriorityQueue

// const q = createPriorityQueue()
// q.enqueue('Fix bug')
// q.enqueue('Add feature')
// q.enqueue('Update packages')
// console.log(q.length)
// q.enqueue('Emergency fix!', true)
// console.log(q.peak())
// q.dequeue()
// console.log(q.peak())
// console.log(q.length)
// q.dequeue()
// q.dequeue()
// q.dequeue()
// console.log(q.isEmpty())
