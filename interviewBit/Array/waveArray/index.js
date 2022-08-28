/**
 *
 * @param {*} A
 * @returns
 * https://www.interviewbit.com/problems/wave-array/
 *Asked in:
  Amazon, 
  Google,
  Adobe
  
  ou are given an unsorted array of integers(arr) of length n,
   write a program to sort it in wave form.

Problem Note:

The array elements in the resultant array must be such that 
arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4]
 .....
If there are multiple sorted orders in wave form, 
return the one which is lexicographically smallest.
The array may contain duplicates.
Example 1

Input: arr = [5, 2, 9, 3, 2]
Output: [2, 2, 5, 3, 9]
Explanation: In the above example, you can see 2 >= 2 <= 5 >= 3 <= 9.
 Thus we get, arr = [2, 2, 5, 3, 9] as output which is sorted in wave form. 


 */

function waveArray(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      if (A[i] >= A[i + 1] || A[i] === A[A.length - 1]) {
      } else {
        let temp = A[i];
        A[i] = A[i + 1];
        A[i + 1] = temp;
      }
    }
  }
  return A;
}

console.log(waveArray([3, 2, 9, 6, 4, 1]));
