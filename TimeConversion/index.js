function TimeConversion(s) {
  let symbol = s[s.length - 2] + s[s.length - 1];
  let newTIme = "";
  let strArray = s.split(":");

  if (symbol === "AM" && strArray[0] !== "12") {
    newTIme = s.slice(0, s.length - 2);
  } else if (symbol === "AM" && strArray[0] === "12") {
    newTIme = "00" + s.slice(2, s.length - 2);
  } else if (symbol === "PM" && strArray[0] !== "12") {
    newTIme =
      (parseInt(strArray[0]) + 12).toString() + s.slice(2, s.length - 2);
  } else {
    newTIme = s.slice(0, s.length - 2);
  }
  return newTIme;
}

console.log(TimeConversion("07:05:55:55:44:45AM"));
