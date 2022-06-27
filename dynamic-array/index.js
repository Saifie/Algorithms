/**
 * https://www.hackerrank.com/challenges/dynamic-array/problem
 * @param {*} n
 * @param {*} queries
 * @returns array
 *
 *
 * 1) given the 2d array
 * 2) n
 * 3)you have to initialize the lastanswer as 0 and arrays having n arrays in it
 *
 * 4) the 2d array contain array like [1,4,6]
 *
 * the first value is type (t) second is (x) and and the third or last one  is (y)
 * so if the type is 1 than you have to implement the query 1 or if it is 2 then
 * implement query 2
 * for query you can refer to the hackerrank questions
 *
 * you have to return the answers array
 *
 *
 */

function dynamicArray(n, queries) {
  //initialize the array having n number of empty array
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(new Array());
  }
  //initialize lastAnswers
  let lastAnswers = 0;

  //this will store lastAnswers and return it
  let Answer = [];
  for (let i = 0; i < queries.length; i++) {
    let currElement = queries[i];
    //initialize x,t y
    let x = currElement[1];
    let y = currElement[2];
    let t = currElement[0];
    if (t === 1) {
      //query formula already given
      arr[(x ^ lastAnswers) % n].push(y);
    }
    if (t === 2) {
      //assign value to lastaAnswers as by formula and store it answers
      lastAnswers =
        arr[(x ^ lastAnswers) % n][y % arr[(x ^ lastAnswers) % n].length];
      Answer.push(lastAnswers);
    }
  }
  return Answer;
}
console.log(
  dynamicArray(2, [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ])
);
