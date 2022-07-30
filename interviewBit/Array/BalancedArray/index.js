function BalancedArray(A) {
  if (A.length == 0) return 0;
  if (A.length == 1) return 1;

  let odd = 0,
    even = 0;
  let oddSum = [],
    evenSum = [];
  for (let i = 0; i < A.length; i++) {
    if ((i + 1) % 2) {
      odd += A[i];
      oddSum[i] = odd;
      evenSum[i] = even;
    } else {
      even += A[i];
      oddSum[i] = odd;
      evenSum[i] = even;
    }
  }

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    if ((i + 1) % 2) {
      if (oddSum[i] - A[i] + even - evenSum[i] == evenSum[i] + odd - oddSum[i])
        result++;
    } else {
      if (oddSum[i] + even - evenSum[i] == evenSum[i] - A[i] + odd - oddSum[i])
        result++;
    }
  }
  let EvenSum = [];
  let OddSum = [];
  // see note book
  //no need this code just for explaination
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      EvenSum[i] = oddSum[i] + even - evenSum[i] - A[i];
      OddSum[i] = evenSum[i] + odd - oddSum[i];
    } else {
      OddSum[i] = evenSum[i] + odd - oddSum[i] - A[i];
      EvenSum[i] = oddSum[i] + even - evenSum[i];
    }
  }

  return result;
}
console.log(BalancedArray([2, 1, 6, 4]));
[5, 5, 2, 5, 8][(2, 1, 6, 4)];

[0, 2, 8, 8];

// even 8    5
// odd 5   6
// function BalancedArray(A) {
//     let count = 0;
//     let total = 0;

//     while (count < A.length) {
//       let odd = 0;
//       let even = 0;
//       let currElement = A[count];
//       A.splice(count, 1);
//       for (var i = 0; i < A.length; i++) {
//         if (i % 2 === 0) {
//           even += A[i];
//         } else {
//           odd += A[i];
//         }
//       }
//       if (odd === even) {
//         total++;
//       }
//       A.splice(count, 0, currElement);

//       count++;
//     }

//     return total;
//   }
