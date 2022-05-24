// https://www.interviewbit.com/problems/palindromic-words/
/**
 *
 *
 *
 * @param {*} A
 * @returns palindrom sword count
 *
 * 1)  convert the the sentence in to words of array
 * 2)first iterate words of array
 * 3) i used every but we can used simple loop or array reverse and compare methods as well
 * 4) increase count id words is palindrome
 *
 *
 */

function PalindromeString(A) {
  const arr = A.split(" ");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const currStr = arr[i];
    const palindrome = currStr.split("").every((char, i) => {
      return char === currStr[currStr.length - i - 1];
    });
    if (palindrome) {
      count++;
    }
  }
  return count;
}
console.log(PalindromeString("wow mom"));
