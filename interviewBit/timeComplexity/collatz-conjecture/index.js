/**
 * https://www.interviewbit.com/problems/collatz-conjecture

 * 
 * @param {*} A 
 * @param {*} B 
 * @returns 
 * Given two integers A and B, where A is the first element of the sequence then find Bth element of the sequence.
If the kth element of the sequence is X then k+1th element calculated as:
if X is even then next element is X/2.
else next element is 3×X + 1.

1) use while loop for iteration modify A based on even and odd
 */
function collatzConjecture(A, B) {
  let count = 0;
  while (count <= B) {
    count++;
    if (count === B) {
      break;
    }

    if (A % 2 === 0) {
      A = A / 2;
    } else {
      A = 3 * A + 1;
    }
  }
  return A;
}
console.log(collatzConjecture(5, 6));
