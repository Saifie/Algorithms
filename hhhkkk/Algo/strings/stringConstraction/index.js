function stringConstruction(s) {
  let newStr = "";
  let dollar = 0;

  for (let i = 0; i < s.length; i++) {
    if (newStr.includes(s[i])) {
    } else {
      newStr += s[i];
      dollar++;
    }
  }
  return dollar;
}
console.log(stringConstruction("abab"));
