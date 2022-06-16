/**https://www.interviewbit.com/problems/last-digit-k-count/
 *
 * @param {*} A
 * @param {*} B
 * @param {*} C
 * @returns
 *
 * so ths was a hard question for me to solve without using the loop
 * 1) ceil the A and floor B
 *
 */

function lastDigitKCount(A, B, C) {
  let lowCount = Math.ceil(A / 10);
  let highCount = Math.floor(B / 10);
  console.log("first=", { lowCount, highCount });
  console.log(B % 10);

  // start from here if B modulo 10 is greater or equal to C value we have to include it mean ceil
  if (B % 10 >= C) {
    highCount = Math.ceil(B / 10);
  }
  // start from here if A modulo 10 is greater and B% 10 is equal to C
  // we have to foor A becouse it will otherwise  0

  if (A % 10 > C && B % 10 === C && C === 0) {
    lowCount = Math.floor(A / 10);
  }
  // it check as 0 to 10  and c=0 so 2 include it as 10/10 always 1
  //so ceil happend but as c=0 so 10 as
  // to includes in B only happen when A modulo 10 is 0

  //its include the 0 as counted otherwise it will return 1 if we go with 0-10 c=0

  if (A % 10 === 0 && B % 10 === 0 && C === 0) {
    highCount = highCount + 1;
  }
  // start from here if A modulo 10 is lessor or equal to C value we have to exclude it mean floor

  if (A % 10 <= C) {
    lowCount = Math.floor(A / 10);
  }
  console.log("last=", { lowCount, highCount });

  return highCount - lowCount;
}
console.log(lastDigitKCount(2, 11, 1));
