function strongPassword(n, password) {
  special_characters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ];
  let cond = 0;
  let containedNum = 0;
  let containedSpec = 0;
  let containedSmall = 0;
  let containedCaps = 0;
  for (let i = 0; i < password.length; i++) {
    if (parseInt(password[i]) || parseInt(password[i]) === 0) {
      containedNum = 1;
    }
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      containedSmall = 1;
    }
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      containedCaps = 1;
    }
    if (special_characters.includes(password[i])) {
      containedSpec = 1;
    }
  }
  cond = containedCaps + containedNum + containedSmall + containedSpec;
  let needed = Math.max(4 - cond, 6 - password.length);
  return needed;
}

console.log(strongPassword(3, "##@"));
