function biggerIsGreater(s) {
  let hash = {};
  let length = s.length;
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
    if (s.includes(alphabet[i])) {
      hash[alphabet[i]] = i;
    }
  }
  console.log(hash);
  let otherStr = "";
  let ins = 0;
  let greaterC = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let cur = s[i];
    if (hash[cur] < hash[s[i + 1]]) {
      ins = i;

      let greater = 0;

      for (let j = ins; j < s.length; j++) {
        if (greater <= hash[cur]) {
          greater = hash[s[j]];
          greaterC = s[j];
        }
        if (hash[s[j]] < greater && hash[s[j]] > hash[cur]) {
          greater = hash[s[j]];
          greaterC = s[j];
        }
      }
      break;
    } else {
      otherStr += s[i];
    }
  }
  otherStr += s[ins];
  otherStr = otherStr.replace(greaterC, "");
  otherStr = otherStr.split("").sort().join("");
  //   console.log(otherStr);
  if (!greaterC) {
    return "no answer";
  }
  console.log(greaterC, ins, s[ins]);

  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (i < ins) {
      newStr += s[i];
    }
    if (i === ins) {
      newStr += greaterC;
    }
  }
  newStr += otherStr;

  return newStr;
}
function biggerIsGreater2(s) {
  let hash = {};
  let length = s.length;
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
    if (s.includes(alphabet[i])) {
      hash[alphabet[i]] = i;
    }
  }
  console.log(hash);
  let otherStr = "";
  let ins = 0;
  let greaterC = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let cur = s[i];
    if (cur < s[i + 1]) {
      ins = i;
      for (let j = ins; j < s.length; j++) {
        if (greaterC <= cur) {
          greaterC = s[j];
        }
        if (s[j] < greaterC && s[j] > cur) {
          greaterC = s[j];
        }
      }
      break;
    } else {
      otherStr += s[i];
    }
  }
  otherStr += s[ins];
  otherStr = otherStr.replace(greaterC, "");
  otherStr = otherStr.split("").sort().join("");
  //   console.log(otherStr);
  if (!greaterC) {
    return "no answer";
  }
  console.log(greaterC, ins, s[ins]);

  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (i < ins) {
      newStr += s[i];
    }
    if (i === ins) {
      newStr += greaterC;
    }
  }
  newStr += otherStr;

  return newStr;
}
console.log(biggerIsGreater2("dhck"));
/*





*/
