function beautifullBinaryString(s) {
  let count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "0" && s[i + 1] === "1" && s[i + 2] === "0") {
      i = i + 2;
      count++;
    }
  }
  return count;
}

console.log(beautifullBinaryString("0100101010"));
