// https://www.interviewbit.com/problems/add-one-to-number/

/**
 *
 * @param {*} A
 * @returns
 * 
 *  Asked In:
    Google
    Microsoft
 */
function AddOneToNumber(A) {
  for (let i = A.length - 1; i >= 0; i--) {
    let currElement = A[i];
    if (currElement + 1 !== 10) {
      A[i] = currElement + 1;
      break;
    } else {
      if (i === 0) {
        A[i] = 1;
        A.push(0);
      } else {
        A[i] = 0;
      }
    }
  }
  for (var i = 0; i < A.length; i++) {
    if (A[0] === 0) {
      A = A.slice(1);
    }
  }

  return A;
}
console.log(AddOneToNumber([0, 0, 2, 3, 4, 5, 6, 7, 8, 9]));
