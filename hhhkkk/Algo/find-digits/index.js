function findDigits(n) {
  let strNumer = n.toString();
  let count = 0;
  for (var i = 0; i < strNumer.length; i++) {
    let currElement = parseInt(strNumer[i]);
    if (n % currElement === 0) {
      count++;
    }
  }
  return count;
}

console.log(findDigits(1012));
