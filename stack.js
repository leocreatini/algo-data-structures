function createStack() {
  const stack = []

  return {
    push(item) {
      stack.push(item)
    },
    pop() {
      return stack.pop()
    },
    peak() {
      return stack[stack.length - 1]
    },
    get length() {
      return stack.length
    },
    isEmpty() {
      return stack.length === 0
    },
  }
}

exports.createStack = createStack

// sinkStack = createStack()
// sinkStack.push('large plate')
// sinkStack.push('large plate')
// sinkStack.push('large bowl')
// sinkStack.push('small bowl')
// sinkStack.push('spoon')
// console.log(sinkStack.length)
// console.log(sinkStack.peak())
// sinkStack.pop()
// sinkStack.pop()
// console.log(sinkStack.length)
// console.log(sinkStack.peak())
// console.log(sinkStack.isEmpty())
// sinkStack.pop()
// sinkStack.pop()
// sinkStack.pop()
// console.log(sinkStack.isEmpty())
