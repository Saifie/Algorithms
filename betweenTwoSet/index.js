// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * 
 * given two arrays max num upto two sets 10 
 * you have to find the elements that are in between two Array
 * with these two 2 points:>>>>
 * There will be two arrays of integers. Determine all
 *  integers that satisfy the following two conditions:

1)  The elements of the first array are all factors of the integer being considered
  2)  The integer being considered is a factor of all elements of the second array

  in simple words suppose you have find x so according point all factors is considered mean
   x/(all values of a) will be divisible x%a[...]==0
   now x is divisible by all values of a  the second points says that it will be the factor of b
   mean b[...]%x==0 

   solving is kind of simple as the trickt is to understand the question
 * 
 */

function getTotalX(a, b) {
  // Write your code here
  let count = 0;
  for (var i = a[0]; i <= b[0]; i++) {
    let divisible1 = a.every((item) => {
      return i % item === 0;
    });
    let divisible2 = b.every((item) => {
      return item % i === 0;
    });
    if (divisible1 && divisible2) {
      count++;
    }
  }
  return count;
}

console.log(getTotalX([2, 4], [16, 32, 96]));

// x / a;
// b / x;
