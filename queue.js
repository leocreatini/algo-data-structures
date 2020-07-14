function createQueue() {
  const queue = []

  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue() {
      return queue.pop()
    },
    peak() {
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    },
  }
}

exports.createQueue = createQueue

// const q = createQueue()
// q.enqueue('First task')
// q.enqueue('Second task')
// q.enqueue('Third task')
// console.log(q.length)
// q.dequeue()
// console.log(q.peak())
// q.dequeue()
// console.log(q.peak())
// q.dequeue()
// console.log(q.isEmpty())
