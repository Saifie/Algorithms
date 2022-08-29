/***
 * https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true
 *
 *
 */
function arrayLeftRotation(d, arr) {
  for (var i = 0; i < d; i++) {
    arr.push(arr[0]);
    arr.shift();
  }
  return arr;
}
console.log(arrayLeftRotation(4, [1, 2, 3, 4, 5]));
