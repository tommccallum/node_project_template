function helloworld() {
  return "helloworld"
}

function goodbye() {
  return "goodbye"
}

const squares = new Array(3)
const index = 0

function move(value) {
  if ( typeof(value) == "string" ) {
    throw new Error("whoops!")
  }
  return (index + value) % squares.length
}


function writeATestToTestMe(x, y) {
  if ( x % 2 == 0 ) {
    return x + y
  }
  return x - y
}

module.exports = {
  helloworld: helloworld,
  move: move
}
