function theTimeInWords(x, y) {
  let a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  x = x.toString();
  y = y.toString();

  let hours = a[x];
  let min = `${b[y[0]]} ${a[y[1]]}`;
  if (+y < 20) {
    min = `${a[y]}`;
  }

  switch (y) {
    case "0":
      return `${hours} o' clock`;
    case "15":
      return `quarter past ${hours}`;
    case "30":
      return `half past ${hours}`;
    case "45":
      hours = a[+x + 1];
      return `quarter to ${hours}`;
    default:
      if (+y < 30) {
        if (+y === 1) {
          return `${min} minute past ${hours}`;
        }
        return `${min} minutes past ${hours}`;
      } else if (+y > 30) {
        hours = a[+x + 1];
        let reminder = 60 - y;
        if (reminder >= 20) {
          reminder = reminder.toString();
          reminder = `${b[reminder[0]]} ${a[reminder[1]]}`;
        } else {
          reminder = a[reminder];
        }
        return `${reminder}minutes to ${hours}`;
      }
  }
}

console.log(theTimeInWords(7, 29));
