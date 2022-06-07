//interviewbit
/**
 *
 * @param {*} A
 * @returns palindrome string
 * will do with 3 methods
 * 1) start with left and right pointer and compare go insaide
 * 2) start fom middle and compare go ouside left  pointer go left and right pointer go rightPointer
 * 3) reverse the string and initialize with str2 than start pointer on both string from left and compare
 *
 *
 *
 */
function palindromeString(A) {
  let str = A.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let str2 = str.split("").reverse().join("");
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str.length - 1 && pointer2 < str.length - 1) {
    if (str[pointer1] !== str2[pointer2]) {
      return false;
    }
    pointer1++;
    pointer2++;
  }

  return true;
}

console.log(palindromeString("A man, a plan, a canal: Panama"));

// function palindromeString(A) {
//     let str = A.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
//     let middle = Math.floor(str.length / 2);
//     if (str.length <= 1) {
//       return true;
//     }
//     let leftPointer;
//     let rightPointer;
//     if (str.length % 2 === 0) {
//       leftPointer = middle - 1;
//       rightPointer = middle;
//     } else {
//       rightPointer = middle;
//       leftPointer = middle;
//     }
//     console.log(leftPointer, rightPointer);

//     while (leftPointer > 0 && rightPointer < str.length - 1) {
//       console.log({ leftPointer, rightPointer });
//       if (str[leftPointer] !== str[rightPointer]) {
//         return false;
//       }
//       leftPointer--;
//       rightPointer++;
//     }

//     return true;
//   }

// A man, a plan, a canal: Panama

// function palindromeString(A) {
//     let str = A.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
//     let leftPointer = 0;
//     let rightPointer = str.length - 1;
//     if (str.length < 1) {
//       return true;
//     }

//     while (leftPointer < rightPointer) {
//       console.log({ leftPointer, rightPointer });
//       if (str[leftPointer] !== str[rightPointer]) {
//         return false;
//       }
//       leftPointer++;
//       rightPointer--;
//     }

//     return true;
//   }
