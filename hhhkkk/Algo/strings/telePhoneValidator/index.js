/*

note its only for us telephone number number
we can do other country by creating array like [92,91,87,1]etc 

*/

function telePhoneValidator(str) {
  let num = 0;
  let dash = 0;
  let brac = 0;

  let allow = [")", "(", " ", "-", "0"];
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) || parseInt(str[i]) === 0) num++;

    if (str[i] === "-") dash++;

    if (str[i] === ")" || str[i] === "(") brac++;
  }
  if (num < 10 || num > 11) return false;
  if (brac > 2 || dash > 2) return false;

  console.log(num);
  if (num === 11) {
    if (str[0] !== "1") return false;
    if (str[0] === "1" && !(str[1] === "(" || str[1] === " ")) return false;
    for (let i = 0; i < str.length; i++) {
      if (!parseInt(str[i])) {
        if (!allow.includes(str[i])) return false;
      }
      if (str[i] === "(") {
        if (str[i + 4] !== ")") return false;
      }
      if (str[i] === ")") {
        if (str[i - 4] !== "(") return false;
      }
      if (dash === 1 && str[i] === "-") {
        if (parseInt(str[i + 4])) {
          dash--;
        } else return false;
      }
      if (dash === 2 && str[i] === "-") {
        if (str[i + 4] === "-") {
          dash--;
        } else return false;
      }
    }
  }
  if (num === 10) {
    for (let i = 0; i < str.length; i++) {
      if (!parseInt(str[i])) {
        if (!allow.includes(str[i])) return false;
      }
      if (str[i] === "(") {
        if (str[i + 4] !== ")") return false;
      }
      if (str[i] === ")") {
        if (str[i - 4] !== "(") return false;
      }
      if (dash === 1 && str[i] === "-") {
        if (parseInt(str[i + 4])) {
          dash--;
        } else return false;
      }
      if (dash === 2 && str[i] === "-") {
        if (str[i + 4] === "-") {
          dash--;
        } else return false;
      }
    }
  }
  return true;
}

console.log(telePhoneValidator("1 (556)665-5555"));
