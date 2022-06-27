function bitFlipping(A) {
  let inBinary = A.toString(2);
  let reverseBinary = "";
  for (let i = 0; i < inBinary.length; i++) {
    const bit = inBinary[i];
    if (bit == 1) {
      reverseBinary += 0;
    } else {
      reverseBinary += 1;
    }
  }
  return parseInt(reverseBinary, 2);
}

console.log(bitFlipping(7));
// let len = A.toString(2).length;
// let mask = Math.pow(2, len) - 1;
// console.log({ mask: mask, len });
// return A ^ mask;
// function toBinary(A) {
//   let binary = [];
//   if (A === 0) {
//     return (binary = "0");
//   }
//   while (A) {
//     binary.unshift(A % 2);
//     A = Math.floor(A / 2);
//   }
//   return binary.join("");
// }
// function toDecimal(v) {
//     let binary = '';
//     if(typeof v == 'string') {
//       binary = v.split();
//     } else {
//         binary = v.toString().split();
//     }
//     let decimal = 0;
//     for(let i = 0; i < binary.length; i++) {
//         decimal = (decimal * 2) + binary[i];
//     }
//     return decimal;
//   }
