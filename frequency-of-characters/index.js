function frequencyOfCharacters(A) {
  let obj = {};

  for (let i = 0; i < 26; i++) {
    obj[String.fromCharCode(65 + i).toLowerCase()] = 0;
  }
  for (let i = 0; i < A.length; i++) {
    let currElement = A[i].toLowerCase();
    if (obj[currElement]) {
      obj[currElement]++;
    } else {
      obj[currElement] = 1;
    }
  }

  return Object.values(obj);
}

console.log(
  frequencyOfCharacters(
    "nmhedouanmytoxqvefsdchakasygeixqdrkkmdpvpyodzkdogmmydfiqdqqugmkfaxldykdxcebjgduljlvyqfrxgwmnpvtmyqlv"
  )
);
