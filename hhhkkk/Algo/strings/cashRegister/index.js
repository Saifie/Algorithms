function checkCashRegister(price, cash, cid) {
  let ret = cash - price;
  let range;
  let rangeNum;
  let obj = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    [`ONE HUNDRED`]: 100,
  };
  if (ret >= 0.01 && ret <= 0.04) {
    rangeNum = 0.01;
    range = "PENNY";
  }
  if (ret >= 0.05 && ret <= 0.09) {
    rangeNum = 0.05;
    range = "NICKEL";
  }
  if (ret >= 0.1 && ret <= 0.24) {
    rangeNum = 0.1;
    range = "DIME";
  }
  if (ret >= 0.25 && ret <= 0.9) {
    rangeNum = 0.25;
    range = "QUARTER";
  }
  if (ret >= 1 && ret <= 4) {
    rangeNum = 1;
    range = "ONE";
  }
  if (ret >= 5 && ret <= 9) {
    rangeNum = 5;
    range = "FIVE";
  }
  if (ret >= 10 && ret <= 19) {
    rangeNum = 10;
    range = "TEN";
  }
  if (ret >= 20 && ret <= 99) {
    rangeNum = 20;
    range = "TWENTY";
  }
  if (ret >= 100 && ret <= 999) {
    rangeNum = 100;
    range = "ONE HUNDRED";
  }
  let total = 0;

  for (var i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  console.log(total, ret);
  //   console.log(total);
  if (total < ret) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (total === ret) {
    return { status: "CLOSED", change: cid };
  } else if (total > ret) {
    let change = [];
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][0] === range) {
        let count = 0;
        let limit = cid[i][1];
        while (ret !== 0) {
          count++;
          //   console.log(ret);
          let val = rangeNum;
          while (rangeNum <= ret) {
            rangeNum += val;
          }
          val = rangeNum - val;
          if (val > limit) {
            val = limit;
          }
          val = parseFloat(val.toFixed(4));
          change.push([range, val]);
          ret = parseFloat((ret - val).toFixed(4));
          if (ret === 0) {
            break;
          }
          if (cid[i - count] === undefined) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
          }
          range = cid[i - count][0];
          limit = cid[i - count][1];

          rangeNum = obj[range];
        }
      }
    }
    for (let i = 0; i < change.length; i++) {
      if (change[i][1] === 0) {
        change.splice(i, 1);
      }
    }

    return { status: "OPEN", change };
  }
}
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

let v = {
  status: "OPEN",
  change: [
    ["TWENTY", 60],
    ["TEN", 20],
    ["FIVE", 15],
    ["ONE", 1],
    ["QUARTER", 0.5],
    ["DIME", 0.2],
    ["PENNY", 0.04],
  ],
};
