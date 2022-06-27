/**https://www.interviewbit.com/problems/find-duplicate-in-array/
 * 
 * @param {*} A 
 * @returns 
 * 
 * Asked In:
    Amazon
    VMWare
    Riverbed
    Microsoft

 */

function findDuplicateInArray(A) {
  let unique = new Set();
  for (var i = 0; i < A.length; i++) {
    let currElement = A[i];
    if (unique.has(currElement)) {
      return currElement;
    } else {
      unique.add(currElement);
    }
  }
  return -1;
}

console.log(findDuplicateInArray([273, 57, 243, 57, 42, 168, 55, 144, 13]));
