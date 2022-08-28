function gemstones(arr) {
  let count = 0;
  let array = Array.from(new Set(arr[0]));
  let currElement = array;
  for (j = 0; j < currElement.length; j++) {
    let character = currElement[j];
    let val = arr.every((item) => {
      return item.includes(character);
    });
    if (val) {
      count++;
    }
  }

  return count;
}
console.log(
  gemstones([
    "xhsbaqwbokcaqbkhrzddydwirmldcr",
    "kwkbkhlwmlpuomfaenahhnnpgqpkcxlspbomrweoqq",
    "rtdckeukfoppbsiccflxqcoxrhwnxpwyjsrvjngqmbgqfwahhkzcbifrvpamffoxcetdochazcqsqhazndwdk",
    "cakdnrducighyuuemxhqmujauwxabextkdamxybkoyexmdmlyvnmlrwwrt",
    "czuzxlzrmuaa",
    "gquymxuabmymtnljadbqxjsipnixbyhwhaoaciinwdhppbpyxswcveddpojlopqsuqsvjhpobpdefuj",
    "abtwcqoib",
    "vqpgcuwvxdlaquaiwydejgpwvpwdjeybgbtienzijzeah",
    "shrcvpgwzdkfcvpmjeuslonwerklxysafwgeurdnshmzunpaxmgfiwsehowfyjboeahpuqlatcmooenlicnrkhcbkl",
    "paws",
    "oaqdya",
  ])
);
