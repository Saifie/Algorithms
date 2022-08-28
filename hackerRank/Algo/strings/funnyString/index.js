function funnyString(s) {
  let result = [];
  let result2 = [];
  let first = s.charCodeAt(0);
  let last = s.charCodeAt(s.length - 1);
  for (let i = 1, j = s.length - 2; i < s.length && j >= 0; i++, j--) {
    result.push(Math.abs(s.charCodeAt(i) - first));
    result2.push(Math.abs(s.charCodeAt(j) - last));
    first = s.charCodeAt(i);
    last = s.charCodeAt(j);
  }
  for (let j = 0; j < result.length; j++) {
    if (result2[j] !== result[j]) {
      return "Not Funny";
    }
  }
  return "Funny";
}

console.log(funnyString("acxz"));
