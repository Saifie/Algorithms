function MajorityElement(A) {
  let currElementCount = 0;
  let index = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[index] === A[i]) {
      currElementCount++;
    } else {
      console.log({ i, index, currElementCount });
      currElementCount--;
    }
    if (currElementCount === 0) {
      index = i;
      currElementCount++;
    }
  }
  let count = 0;
  //check the Element at index is MajorityElement
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[index]) {
      count++;
    }
  }
  return count;
}

console.log(MajorityElement([1, 1, 2, 3, 1]));
