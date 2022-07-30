/**
 * https://www.interviewbit.com/problems/intersection-of-sorted-arrays/hints/
 * @param {*} A
 * @param {*} B
 * @returns []
 * 
 * Asked In:
   Facebook (Meta)
    Google


    Just not forget that the array is sorted so use pointer
    start from start of the arrays and compare if a[i] >b[i]
    increase b index and vice verse 
    if both equal add i to array and increase both
    if the length of the array B is at last index break the loop
*/

function IntersectionOfTwoArray(A, B) {
  let arr = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < A.length) {
    if (pointer2 === B.length) {
      break;
    }
    if (A[pointer1] < B[pointer2]) {
      pointer1++;
    } else if (A[pointer1] === B[pointer2]) {
      arr.push(A[pointer1]);
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }
  return arr;
}

console.log(IntersectionOfTwoArray([1, 2, 3, 3, 4, 5, 6], [3, 3, 5]));

// function IntersectionOfTwoArray(A, B) {
//     let arr = [];
//     let count = 0;

//     while (count < A.length) {
//       let currElement = A[count];
//       let pointer1 = 0;
//       let pointer2 = B.length - 1;

//       while (pointer1 <= pointer2) {
//         let mid = Math.floor((pointer1 + pointer2) / 2);
//         if (B[mid] === currElement) {
//           arr.push(B[mid]);
//           B.splice(mid, 1);

//           break;
//         }
//         if (B[mid] > currElement) {
//           pointer2 = mid - 1;
//         } else {
//           pointer1 = mid + 1;
//         }
//       }
//       count++;
//     }
//     return arr;
//   }
