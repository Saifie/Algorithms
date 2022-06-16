function ArmstrongNmber(A) {
  let sum = BigInt(0);
  let newStr = A.toString();
  let length = BigInt(+newStr.length);
  for (let i = 0; i < newStr.length; i++) {
    let currElement = BigInt(+newStr[i]);

    sum += currElement ** length;
  }
  if (sum == A) {
    return 1;
  }
  return 0;
}
console.log(ArmstrongNmber(371));
