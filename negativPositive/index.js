function negativePosition(A) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < A.length; i++) {
    let currElement = A[i];
    if (Math.sign(Number(BigInt(currElement))) === -1) {
      negative++;
    } else if (Math.sign(Number(BigInt(currElement))) === 1) {
      positive++;
    } else {
      zero++;
    }
  }

  return [positive, negative];
}

console.log(negativePosition([1, 2, 3]));
