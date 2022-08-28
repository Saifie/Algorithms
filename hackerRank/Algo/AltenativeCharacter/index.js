function alternativeCharacters(s) {
  let str = s.split("");
  let count = 0;
  for (var i = 0; i < 2; i++) {
    if (
      (str[i] === "A" && str[i + 1] === "A") ||
      (str[i] === "B" && str[i + 1] === "B")
    ) {
      str.splice(str[i + 1], 1);
      i--;
      count++;
    }
  }
  return count;
}
console.log(alternativeCharacters("BBBBB"));
