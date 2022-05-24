// https://www.interviewbit.com/problems/string-inversion/
/**
 *
 *
 * @param {*} A
 * @returns inverse the case of each letter
 *
 *
 * 1) create new variable initialized to empty swtring
 * 2) loop through string check string case by one the string method charCodeAt will
 * return asci code for character [65-90] are Caps letter and small are from [97-122]
 * 3) check and inverse it
 * 4) return newStr
 */

function stringInversion(A) {
  let newStr = "";
  for (let i = 0; i < A.length; i++) {
    if (A.charCodeAt(i) > 90) {
      newStr += A[i].toUpperCase();
    } else {
      newStr += A[i].toLowerCase();
    }
  }
  return newStr;
}
