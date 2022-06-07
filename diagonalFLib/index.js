function diagonalFlib(A) {
  let B = [];
  for (var i = 0; i < A[0].length; i++) {
    let row = [];
    for (var j = 0; j < A.length; j++) {
      row.push(A[j][i]);
    }
    B.push(row);
  }
  return B;
}

console.log(
  diagonalFlib([
    [1, 0],
    [1, 0],
  ])
);
// [1,1]
// [0,0]
/**
 * [1,2,3]
 * [4,5,6]
 *
 * [1,4]
 * [2,5]
 * [3,6]
 */
