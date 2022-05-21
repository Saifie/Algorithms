function pick(A, B) {
  let sum1 = 0,
    sumFinal = -100000000000000;
  for (let i = 0; i < B; i++) {
    sum1 += A[i];
  }

  for (let i = 0; i < B; i++) {
    sum1 -= A[B - 1 - i];
    sum1 += A[A.length - 1 - i];

    sumFinal = Math.max(sum1, sumFinal);
    console.log({
      remove: A[B - 1 - i],
      added: A[A.length - 1 - i],
      sum1,
      sumFinal,
    });
  }

  return sumFinal;
}

console.log(
  pick(
    [
      -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173,
      961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421,
      -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297,
      811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243,
      -963, -141, -277, 741, 529, -222, -684, 35,
    ],

    48
  )
);

// function pick(A, B) {
//   let pointer1 = 0;
//   let pointer2 = A.length - 1;
//   let totalMax = 0;
//   let count = 0;
//   while (pointer1 < pointer2) {
//     if (count < B) {
//       if (A[pointer1] > A[pointer2]) {
//         totalMax += A[pointer1];
//         console.log("if", {
//           pointer1: A[pointer1],
//           pointer2: A[pointer2],
//           totalMax,
//           count,
//         });
//         count++;
//         pointer1++;
//       } else {
//         totalMax += A[pointer2];
//         console.log("else", {
//           pointer1: A[pointer1],
//           pointer2: A[pointer2],
//           totalMax,
//           count,
//         });
//         pointer2--;
//         count++;
//       }
//     } else {
//       count++;
//       pointer1++;
//     }
//   }
//   return totalMax;
// }

// console.log(
//   pick(
//     [
//       -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173,
//       961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421,
//       -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297,
//       811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243,
//       -963, -141, -277, 741, 529, -222, -684, 35,
//     ],
//     60
//   )
// );
