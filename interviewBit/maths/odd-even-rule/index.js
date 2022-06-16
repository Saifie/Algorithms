/**
 *
 * @param {*} A
 * @param {*} B
 * @param {*} C
 * @returns
 *
 *
 * https://www.interviewbit.com/problems/odd-even-rule/
 *
 * 1) we have to check the pair of vehicles in A array and B date
 * 2) if date is even than odd array will be fined and vice verse
 */

function oddEven(A, B, C) {
  let fine = 0;
  for (let i = 0; i < A.length; i++) {
    if (B % 2 === 0) {
      if (BigInt(A[i]) % 2n !== 0n) {
        fine += C;
      }
    } else {
      if (BigInt(A[i]) % 2n === 0n) {
        fine += C;
      }
    }
  }
  return fine;
}

console.log(oddEven([0, 1, 1], 2, 51));
// A : [ 0, 1, 7, 4, 5, 2, 0, 6, 6, 9, 3, 5, 8, 0, 0, 5,
// 6, 0, 3, 0, 4, 6, 5, 9, 8, 5, 0, 6, 4, 7, 9, 7,
// 2, 0, 7, 3, 6, 7, 9, 3, 2, 9, 7, 7, 6, 0, 6, 8, 2, 4,
//7, 4, 2, 2, 3, 1, 4, 8, 9, 0, 9, 5, 5, 3, 9, 4, 2,
// 0, 9, 0, 5, 3, 2, 9, 5, 4, 9, 0, 7, 7, 8, 1, 0, 6, 8, 6, 7,
//7, 9, 8, 2, 3, 3, 5, 5, 8, 4, 8, 2, 4 ]
// B : 17
// C : 468

// 53
