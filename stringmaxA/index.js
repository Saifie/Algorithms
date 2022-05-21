// https://www.interviewbit.com/problems/maximum-substring/
/**
 * questions..
 * Given a string A consisting of only characters 'a' and 'b'.
Divide the string into substrings of length B.
Find the subtring with maximum count of 'a' and return the count.

A = "baab"
B = 2

expected output= 1

as two subtring 'ba' , 'ab' both have 1 'a'


A = "bba"
B = 2

expected output= 1

 * @param {*} A 
 * @param {*} B 
 * @returns maxA
 */

/**
 * .......direction......
 * 1) initialize max A count and also sub (divide the string to its substring)
 * 2) 1 for loop iterate to sub value and create substring also max value of a in each iteration of substring
 * 3) 2nd for loop is iterate to each value of substring and find a incrasing max and after finising 2 loop add max value to maxA count
 * 4) simply return maxA value
 *
 */

function strings(A, B) {
  let sub = Math.ceil(A.length / B);
  let maxA = 0;
  for (i = 1; i <= sub; i++) {
    let max = 0;
    let substring = A.substring((i - 1) * B, B * i);
    for (let i = 0; i < substring.length; i++) {
      if (substring[i] === "a") {
        max += 1;
      }
    }
    maxA = Math.max(max, maxA);
  }

  return maxA;
}
console.log(strings("bba", 2));

// let maxCount = 0;
// for (let i = 0; i < A.length; i += B) {
//     const currStr = A.substring(i, i + B);
//     let currCount = 0;
//     [...currStr].forEach(c => currCount += c === 'a' ? 1 : 0);
//     maxCount = Math.max(maxCount, currCount);
// }

// return maxCount;
