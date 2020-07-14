function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftNodeKey) {
      const newLeftNode = createBinaryNode(leftNodeKey)
      this.left = newLeftNode
      return newLeftNode
    },
    addRight(rightNodeKey) {
      const newRightNode = createBinaryNode(rightNodeKey)
      this.right = newRightNode
      return newRightNode
    },
  }
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn)
      visitFn(node)
      TRAVERSALS.IN_ORDER(node.right, visitFn)
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node)
      TRAVERSALS.PRE_ORDER(node.left, visitFn)
      TRAVERSALS.PRE_ORDER(node.right, visitFn)
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left, visitFn)
      TRAVERSALS.POST_ORDER(node.right, visitFn)
      visitFn(node)
    }
  },
}

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey)

  return {
    root,
    print(traversalMethod = 'IN_ORDER') {
      let result = ''

      function visit(node) {
        result += result.length === 0 ? node.key : ` => ${node.key}`
      }

      TRAVERSALS[traversalMethod](this.root, visit)

      return result
    },
  }
}

exports.createBinaryTree = createBinaryTree

// const tree = createBinaryTree('a')
// const b = tree.root.addLeft('b')
// const c = tree.root.addRight('c')
// const d = b.addLeft('d')
// const e = b.addRight('e')
// const f = c.addLeft('f')
// const g = c.addRight('g')
// const h = d.addLeft('h')
// const i = d.addRight('i')

// console.log(tree.print('POST_ORDER'))

// IN_ORDER: h => d => i => b => e => a => f => c => g
// PRE_ORDER: a => b => d => h => i => e => c => f => g
// POST_ORDER: h => i => d => e => b => f => g => c => a
