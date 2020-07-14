const { createQueue } = require('./queue')

function createNode(key) {
  return {
    key,
    neighbors: [],
    addNeighbor(node) {
      this.neighbors.push(node)
    },
  }
}

function createGraph(directed) {
  const nodes = []
  const edges = []

  return {
    addNode(key) {
      const node = createNode(key)
      nodes.push(node)
    },
    getNode(key) {
      return nodes.find((node) => node.key === key)
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key)
      const node2 = this.getNode(node2key)

      node1.addNeighbor(node2)
      edges.push(`${node1key}-${node2key}`)

      if (!directed) {
        node2.addNeighbor(node1)
      }
    },
    print() {
      return nodes
        .map(({ key, neighbors }) => `${key} => ${neighbors.map(({ key }) => key).join(' ')}`)
        .join('\n')
    },
    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      // create list of visited for all nodes
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false
        return acc
      }, {})
      // create queue of nodes to visit
      const queue = createQueue()
      queue.enqueue(startingNode)

      while (!queue.isEmpty()) {
        const visitingNode = queue.dequeue()

        if (!visited[visitingNode.key]) {
          // invoke visitFn with current visiting node
          visitFn(visitingNode)
          // mark visited node's visited prop as true
          visited[visitingNode.key] = true
        }
        // add visiting node's neighbors to queue which haven't been visited yet to the queue.
        visitingNode.neighbors.map((node) => {
          if (!visited[node.key]) {
            queue.enqueue(node)
          }
        })
      }
    },
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      // make initial dictionary of nodes that are visited (bool)
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false
        return acc
      }, {})

      function explore(node) {
        if (!visited[node.key]) {
          visitFn(node)
          visited[node.key] = true
          node.neighbors.forEach(explore)
        }
      }

      explore(startingNode)
    },
  }
}

exports.createGraph = createGraph

// g = createGraph(true)
// nodes = ['Leo', 'Grace', 'Stef', 'Tessa', 'Andrew', 'Bodhi']
// edges = [
//   ['Leo', 'Grace'],
//   ['Leo', 'Stef'],
//   ['Leo', 'Andrew'],
//   ['Grace', 'Leo'],
//   ['Grace', 'Andrew'],
//   ['Andrew', 'Leo'],
//   ['Andrew', 'Grace'],
//   ['Stef', 'Leo'],
//   ['Stef', 'Tessa'],
//   ['Stef', 'Bodhi'],
//   ['Tessa', 'Stef'],
//   ['Bodhi', 'Stef'],
// ]
// nodes.map(g.addNode)
// edges.map((edge) => g.addEdge(...edge))

// console.log(g.print())
// g.breadthFirstSearch('Andrew', ({ key }) => console.log(key))
// g.depthFirstSearch('Stef', ({ key }) => console.log(key))
