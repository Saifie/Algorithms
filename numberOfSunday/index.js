function Num(A, B) {
  let res = Math.floor(B / 7);
  B = B % 7;
  const arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const i = arr.indexOf(A);
  if (B >= 7 - i) return res + 1;
  else return res;
}

function NumberOfSunday(A, B) {
  let sundayCount = 0;
  let numberOFDays = 7;
  let count = 0;
  switch (A) {
    case "Monday":
      sundayCount = Math.floor(B / numberOFDays);
      break;
    case "Tuesday":
      if (B < numberOFDays - 1) {
        return (sundayCount = 0);
      }
      sundayCount = 1 + Math.floor((B - (numberOFDays - 1)) / 7);
      break;
    case "Wednesday":
      if (B < numberOFDays - 2) {
        return (sundayCount = 0);
      }
      sundayCount = 1 + Math.floor((B - (numberOFDays - 2)) / 7);
      break;
    case "Thursday":
      if (B < numberOFDays - 3) {
        return (sundayCount = 0);
      }
      sundayCount = 1 + Math.floor((B - (numberOFDays - 3)) / 7);
      break;

    case "Friday":
      if (B < numberOFDays - 4) {
        return (sundayCount = 0);
      }
      sundayCount = 1 + Math.floor((B - (numberOFDays - 4)) / 7);
      break;
    case "Saturday":
      if (B < numberOFDays - 5) {
        return (sundayCount = 0);
      }
      sundayCount = 1 + Math.floor((B - (numberOFDays - 5)) / 7);
      break;
    case "Sunday":
      if (B < numberOFDays - 6) {
        return (sundayCount = 0);
      }
      sundayCount = 1 + Math.floor((B - (numberOFDays - 6)) / 7);
      break;
    default:
      return "Invalid Day";
  }
  return sundayCount;
}
console.log(NumberOfSunday("Thursday", 14));
