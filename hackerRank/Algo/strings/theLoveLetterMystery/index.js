function theLoveLetterMystery(s) {
  let count = 0;
  let p1 = 0;
  let hash = {};
  let p2 = s.length - 1;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < alphabet.length; i++) {
    hash[alphabet[i]] = i;
  }

  while (p1 < p2) {
    let currElement1 = s[p1];
    let currElement2 = s[p2];
    count += Math.abs(hash[currElement1] - hash[currElement2]);
    p1++;
    p2--;
  }
  return count;
}
console.log(theLoveLetterMystery("cba"));
