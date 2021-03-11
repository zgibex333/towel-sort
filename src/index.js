
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let empty = []; 
  if(typeof matrix !== 'undefined' && matrix.length > 0) {
    for(i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
          empty.push(matrix[i].flat(Infinity))
      } else {
          empty.push(matrix[i].reverse().flat(Infinity))
      }
  }
  return empty.flat(Infinity)

  } else {
    return []; 
  }
}
