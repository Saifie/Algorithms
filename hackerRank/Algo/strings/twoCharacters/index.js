function twoCharacters(s) {
  //   let arr = s.split("");
  //   let hash = {};
  //   let doub = null;

  //   for (let i = 0; i < s.length; i++) {
  //     let ch = s[i];
  //     if (hash[ch]) {
  //       hash[ch]++;
  //     } else {
  //       hash[ch] = 1;
  //     }
  //     if (s[i] === s[i + 1]) {
  //       doub = s[i];
  //     }
  //   }
  //   let array = [];
  //   console.log(doub, hash);
  //   for (let i = 0; i < arr.length; i++) {
  //     let currElement = arr[i];
  //     if (hash[currElement] === 1) {
  //       arr.splice(i, 1);
  //       i--;
  //     }
  //     if (currElement === doub) {
  //       arr.splice(i, 1);
  //       i--;
  //     }
  //     let second = arr[i + 1];
  //     array.push(currElement);
  //     array.push(second);

  //     if(array)
  //   }

  //   console.log(arr.join(""));
  //   return arr.length;

  let array = [];

  let first = s[0];
  array.push(first);
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (hash[ch]) {
      hash[ch]++;
    } else {
      hash[ch] = 1;
    }
  }
  let pair = [];
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j]) {
        pair.push(s[i] + s[j]);
      }
    }
  }
  pair = Array.from(new Set(pair));
  console.log(pair, hash);
  let maxi = 0;

  for (let i = 0; i < pair.length; i++) {
    let st = "";
    // console.log("val==", pair[i][0], pair[i][1]);
    for (let j = 0; j < s.length; j++) {
      if (s[j] === "" || s[j] === "m") {
        if (st[st.length - 1] === s[j]) {
          //   st = "";
          break;
        }
        st += s[j];
      }
    }
    maxi = Math.max(maxi, st.length);
    // console.log(st);
  }
  return maxi;
}

console.log(
  twoCharacters(
    "cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc"
  )
);
