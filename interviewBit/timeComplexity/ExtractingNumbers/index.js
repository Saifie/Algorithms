function ExtractingNumbers(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let num = "";

    if (parseInt(A[i]) || parseInt(A[i]) === 0) {
      while (parseInt(A[i]) || parseInt(A[i]) === 0) {
        num += A[i];
        i++;
      }
      count += +num;
    }
  }
  return count;
}

console.log(ExtractingNumbers("a10b34c"));
