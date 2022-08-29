function caesarCipher(s, k) {
  if (k > 26) {
    k = k % 26;
  }
  const smallAlphabet = [
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
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let hash = {};
  let hash2 = {};

  for (let i = 0; i < smallAlphabet.length; i++) {
    hash[smallAlphabet[i]] = i;
  }
  for (let i = 0; i < alphabet.length; i++) {
    hash2[alphabet[i]] = i;
  }
  //   console.log(hash, hash2);

  let str = "";
  for (let i = 0; i < s.length; i++) {
    let currElement = s[i];
    let num;
    let value;
    if (currElement !== currElement.toLowerCase()) {
      num = hash2[currElement];
      if (num + k > 25) {
        num = (num + k) % 25;
        value = alphabet[num - 1];
      } else {
        value = alphabet[num + k];
      }
    } else if (currElement !== currElement.toUpperCase()) {
      num = hash[currElement];
      if (num + k > 25) {
        console.log(num + k);

        num = (num + k) % 25;
        value = smallAlphabet[num - 1];
      } else {
        value = smallAlphabet[num + k];
      }
    } else {
      value = currElement;
    }

    str += value;
  }
  return str;
}

console.log(caesarCipher("www.abc.xy", 87));
