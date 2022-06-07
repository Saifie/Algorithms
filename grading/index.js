/***
 * https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
 */

function gradingStudents(grades) {
  let array = [];
  for (let i = 0; i < grades.length; i++) {
    let currElement = grades[i];
    let rounded = currElement - (currElement % 5) + 5;

    if (currElement < 40 && 40 - currElement > 3) {
      console.log(currElement);
      array.push(currElement);
    } else if (rounded - currElement < 3) {
      console.log(rounded);
      array.push(rounded);
    } else {
      console.log(currElement);
      array.push(currElement);
    }
  }
  return array;
}

console.log(gradingStudents([73, 67, 38, 33]));
