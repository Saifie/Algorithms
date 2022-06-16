/**
 * https://www.hackerrank.com/challenges/day-of-the-programmer/problem
 * we have to return the day of programmer 256 in september
 * the formula to find leap year is there anything about calender that is change during 1918 of russia
 * explaination is present on hackerrank
 */

function dayOfProgrammer(year) {
  let leapYear;
  if (year === 1918) {
    return "26.09.1918";
  }
  if (parseInt(year) > 1918) {
    if (
      parseInt(year) % 400 === 0 ||
      (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0)
    ) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`;
  } else {
    leapYear = parseInt(year) % 4 === 0;
    if (leapYear) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`;
  }
}

console.log(dayOfProgrammer("1800"));
