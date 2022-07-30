/**
 *
 * @param {*} A
 * @returns
 *
 *Asked In:
United Healthgroup
Amazon
Google
Microsoft
Expedia

 */
function removeDuplicateFromSortedArray(A) {
  let k = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[k] !== A[i]) {
      k = k + 1;
      A[k] = A[i];
    }
  }
  return k + 1;
}

console.log(
  removeDuplicateFromSortedArray([
    0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3,
  ])
);

// for 2 array
// function removeDuplicateFromSortedArray(A, B) {
//     let pointer1 = 0;
//     let pointer2 = 0;
//     let length = A.length;
//     while (pointer1 < length) {
//       if (pointer2 === B.length) {
//         break;
//       }
//       if (A[pointer1] < B[pointer2]) {
//         pointer1++;
//       } else if (A[pointer1] === B[pointer2]) {
//         A.splice(pointer1, 1);
//         B.splice(pointer2, 1);
//       } else {
//         pointer2++;
//       }
//     }
//     return A;
//   }
