function createNode(value) {
  return {
    value,
    next: null,
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value)

      if (this.head === null) {
        this.head = node
        this.tail = node
        this.length++
        return node
      }
      // set previous tail's next to new node, then update the tail.
      this.tail.next = node
      this.tail = node
      this.length++
      return node
    },
    pop() {
      if (this.isEmpty()) {
        return null
      }

      node = this.tail

      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        this.length--
        return node
      }

      let current = this.head
      let penultimate
      while (current) {
        if (current.next == this.tail) {
          penultimate = current
          break
        }
        current = current.next
      }

      penultimate.next = null
      this.tail = penultimate
      this.length--

      return node
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }

      if (index === 0) {
        return this.head
      }

      if (index === this.length - 1) {
        return this.tail
      }

      let i = 0
      let node = this.head
      while (i < index) {
        i++
        node = node.next
      }
      return node
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }

      if (index === 0) {
        let deleted = this.head
        this.head = this.head.next
        this.length--
        return deleted
      }

      let i = 0
      let current = this.head
      let previous
      while (i < index) {
        i++
        previous = current
        current = current.next
      }
      const deleted = current
      previous.next = current.next

      if (previous.next === null) {
        this.tail = previous
      }

      this.length--
      return deleted
    },
    isEmpty() {
      return this.length === 0
    },
    print() {
      const values = []
      i = 0
      current = this.head
      while (current) {
        values.push(current.value)
        current = current.next
      }
      return values.join(' -> ')
    },
  }
}

exports.createLinkedList = createLinkedList

// const ll = createLinkedList()
// const values = ['a', 'b', 'c', 'd', 'e']
// values.map((val) => ll.push(val))
// console.log(ll.print())
// console.log(ll.get(2).value)
// ll.delete(1)
// console.log(ll.print())
