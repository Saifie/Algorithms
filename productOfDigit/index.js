function productOfDigit(A) {
  let product = 1;
  let newStr = A.toString();

  for (let i = 0; i < newStr.length; i++) {
    product *= parseInt(newStr[i]);
  }
  return product;
}

console.log(productOfDigit(123));
