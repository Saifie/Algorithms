/**
 * 
 * @param {*} A 
 * @returns 
 * 
 * https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
 * 
 * using Kadane Algorithm
 * 
Asked In:
Facebook
Paypal
Yahoo
Microsoft
LinkedIn
Amazon
Goldman Sachs
Deloitte

the only part is when the currSum is ever equal to zero start again

 */
function MaxSumContigousSubArray(A) {
  let totalSum = Number.NEGATIVE_INFINITY;
  let currSum = 0;

  for (var i = 0; i < A.length; i++) {
    currSum += A[i];
    if (currSum > totalSum) totalSum = currSum;
    if (currSum < 0) currSum = 0;
  }
  return totalSum;
}
console.log(MaxSumContigousSubArray([1, 2, 3, 4, -10]));

// bruteforce
// function MaxSumContigousSubArray(A) {
//     let totalSum = Number.NEGATIVE_INFINITY;

//     for (var i = 0; i < A.length; i++) {
//       let sum = 0;
//       for (var j = i; j < A.length; j++) {
//         sum += A[j];

//         if (sum > totalSum) {
//           totalSum = sum;
//         }
//       }
//     }
//     return totalSum;
//   }
