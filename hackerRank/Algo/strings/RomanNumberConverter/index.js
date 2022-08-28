function RomanNumberConverter(input) {
  let romans = [
    ["", "M", "MM", "MMM"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ];

  if (parseInt(input)) {
    let len = input.toString().split("");
    if (input > 3999) {
      return "upto 3999";
    }
    let m = 0;
    let c = 0;
    let x = 0;
    let o = 0;
    let roman = "";
    for (let i = 0; i < len.length; i++) {
      if (len.length - i === 4) {
        m = +len[i];
      } else if (len.length - i === 3) {
        c = +len[i];
      } else if (len.length - i === 2) {
        x = +len[i];
      } else if (len.length - i === 1) {
        o = +len[i];
      }
    }
    console.log({ m, c, x, o });
    if (m) {
      roman += romans[0][m];
    }
    if (c) {
      roman += romans[1][c];
    }
    if (x) {
      roman += romans[2][x];
    }
    if (o) {
      roman += romans[3][o];
    }
    console.log(roman);
    return roman;
  } else {
    let number = 0;
    for (var i = 0; i < input.length; i++) {
      switch (input[i]) {
        case "I":
          number += 1;
          break;
        case "X":
          if (input[i - 1] && input[i - 1] === "I") {
            number += 8;
          } else {
            number += 10;
          }
          break;
        case "V":
          if (input[i - 1] && input[i - 1] === "I") {
            number += 3;
          } else {
            number += 5;
          }
          break;
        case "L":
          number += 50;
          break;
        case "C":
          number += 100;
          break;
        case "D":
          if (input[i - 1] && input[i - 1] === "C") {
            number += 300;
          } else {
            number += 500;
          }
          break;
        case "M":
          if (input[i - 1] && input[i - 1] === "C") {
            number += 800;
          } else {
            number += 1000;
          }
          break;
      }
    }
    console.log(number);
    return number;
  }
}

console.log(RomanNumberConverter(400));
