function pangramCheck(A) {
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
  let newArr = A.join("").toLowerCase().split("");
  let bool = alphabet.every((item) => {
    return newArr.includes(item.toLowerCase());
  });
  return bool ? 1 : 0;
}

// let temp = new Set(A.join('').toLowerCase());
//         if (temp.size == 26)
//             return 1;
//         else
//             return 0;
console.log(
  pangramCheck([
    "the",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ])
);
