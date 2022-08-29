function pangram(s) {
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
  for (var i = 0; i < alphabet.length; i++) {
    let currElement = alphabet[i].toLowerCase();
    s = s.toLowerCase();

    if (s.includes(currElement)) {
      alphabet.splice(i, 1);
      i = i - 1;
    }
  }
  if (alphabet.length > 0) {
    return "not pangram";
  }
  return "pangram";
}

console.log(pangram("We promptly judged antique ivory buckles for the prize"));
