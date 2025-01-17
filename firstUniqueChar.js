firstUniqueChar = function (str) {
  let freq = {};
  let res = "";
  let index=-1;

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] == 1) {
      res = str[i];
      index = i;
      break;
    }
    continue;
  }
  return [res, index];
};

// console.log(firstUniqueChar("keetnode"));
// console.log(firstUniqueChar("lovekeetnode"));

module.exports = {firstUniqueChar};