function IntersectionOfTwoArray(A, B) {
  let arr = [];

  for (let i = 0; i < A.length; i++) {
    let currElement = A[i];
    let pointer1 = 0;
    let pointer2 = 0;
    // if()
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
