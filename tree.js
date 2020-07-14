function createNode(key) {
  const children = []
  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    },
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey)
  return {
    root,
    print() {
      let result = ''

      function traverse(node, visitFn, depth) {
        visitFn(node, depth)
        if (node.children.length > 0) {
          node.children.forEach((child) => traverse(child, visitFn, depth + 1))
        }
      }

      function addKeyToResult(node, depth) {
        result += result.length === 0 ? node.key : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      traverse(root, addKeyToResult, 0)

      return result
    },
  }
}

exports.createTree = createTree

// const dom = createTree('html')
// const head = dom.root.addChild('head')
// const body = dom.root.addChild('body')
// const title = head.addChild('title | Hello Tree World')
// const header = body.addChild('header ')
// const main = body.addChild('main')
// const footer = body.addChild('footer')
// const h1 = header.addChild('h1 | Trees')
// const p = main.addChild('p | You can plant these, and they will grow.')
// const copyright = footer.addChild('copyright')

// console.log(dom.print())
