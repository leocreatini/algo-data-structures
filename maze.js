const OPEN = 0
const BLOCK = 1

const MAZE_WIDTH = 10
const MAZE_HEIGHT = 10

function makeMaze(width, height) {
  const maze = []
  for (let i = 0; i < height; i++) {
    const isFirstOrLast = i === 0 || i === height - 1
    Array(width).fill(OPEN)
  }
}
