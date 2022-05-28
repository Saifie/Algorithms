// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
/**
 * Given five positive integers,
 * find the minimum and maximum values
 * that can be calculated by summing exactly four of the five integers.
 *  Then print the respective minimum and maximum values as a single line of two
 * space-separated long integers.
 *
 *
 * 1) loop through the array and add them
 * 2)find max and min values.
 * 3) for max and min sum just minus from total.
 * 4) console log it
 */

function miniMaxSum(arr) {
  let max = 0;
  let min = arr[0];
  let maxsum = 0;
  for (let i = 0; i < arr.length; i++) {
    maxsum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(maxsum - max, maxsum - min);
}
console.log(miniMaxSum([1, 2, 3, 4, 5]));
