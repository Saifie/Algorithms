// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

/**Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:
return the difference of diagonals sum
 * 
 * @param {*} arr 
 * @returns sum
 */

/***
 * 1)its 2D array the first loop iterate the arrays (rows)
 * 2) second loop iterate item in each array (column)
 * 3) to find the main diagonal the row is equal to the column
 * 4) to find the secondary diagonal the sum row  and column or column to row or row to column difference equal to array length -1
 * 5) take two variables add the diagonal element and find the difference
 * 6) return the difference (absolute )
 */
function diagnolDifference(arr) {
  let diagnol1 = 0;
  let diagnol2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        console.log("main Diagnol", arr[i][j]);
        diagnol1 += arr[i][j];
      }
      if (
        j - i === arr.length - 1 ||
        i - j === arr.length - 1 ||
        j + i === arr.length - 1
      ) {
        console.log("secondary diagnol", arr[i][j]);
        diagnol2 += arr[i][j];
      }
    }
  }
  return Math.abs(diagnol1 - diagnol2);
}
console.log(
  diagnolDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
