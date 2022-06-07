/**https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
 *
 * @param {*} arr
 * @returns
 *
 * 1) loop through array and store the values as count and key as element
 * 2) have max and maxKey value.
 * 3) loop though store and return lowest max key
 */
function migratoryBird(arr) {
  let store = {};
  let max = 0;
  let maxKey;
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];
    if (store[currElement]) {
      store[currElement] = store[currElement] + 1;
    } else {
      store[currElement] = 1;
    }
  }
  for (let key in store) {
    if (store[key] > max) {
      max = Math.max(max, store[key]);
      maxKey = key;
    } else if (store[key] === max && key < maxKey) {
      maxKey = key;
    }
  }
  return maxKey;
}

console.log(migratoryBird([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
