function gcf(A, B) {
  while (B) {
    let temp = B;
    B = A % B;
    A = temp;
  }
  return A;
}

function LCM(A, B) {
  let dvi = gcf(A, B);
  let a = BigInt(A);
  let b = BigInt(B);
  let product = a * b;
  return product / BigInt(gcf(A, B));
}

console.log(LCM(11, 1));

// function LCM(A, B) {
//   let a = BigInt(A);
//   let b = BigInt(B);
//   let product = a * b;
//   if (a < b) [a, b] = [b, a];
//   while (b != 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return product / a;
// }
// if (A > B) {
//   higher = A;
// } else {
//   higher = B;
// }
// while (true) {
//   let value = higher;
//   if (higher % A === 0 && higher % B === 0) {
//     console.log("lcm", higher);
//     break;
//   } else {
//     higher = higher + value;
//   }
// }

// function LCM(A, B) {
//   if (A % B === 0 || B % A === 0) {
//     return Math.max(A, B);
//   }
//   let divisible = gcf(A, B);
//   console.log(divisible);
//   if (divisible === 1) {
//     return BigInt(A) * BigInt(B);
//   }
//   let count = A * B;

//   while (count % A === 0 && count % B === 0) {
//     if ((count / divisible) % A === 0 && (count / divisible) % B === 0) {
//       count = count / divisible;
//     } else {
//       break;
//     }
//   }

//   return BigInt(count);
// }
// function LCM(A, B) {
//     let max = A * B;
//     let min = 0;
//     for (let i = A; i <= max; i++) {
//       if (i % A === 0 && i % B === 0) {
//         if (min === 0 && min < i) {
//           min = i;
//         }
//       }
//     }
//     return min;
//   }
