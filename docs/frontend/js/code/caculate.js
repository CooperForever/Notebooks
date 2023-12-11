const nums = "7 2 1 10".split(" ");
const operate = ["+", "-", "*", "/"];
const flag = false;
const deepClone = (arr)=>{
  return JSON.parse(JSON.stringify(arr))
}
const calc = (res, rest) => {
  if (rest.length == 0) {
    if (res == 24) {
      flag = true;
      return res;
    }
    return;
  }
  for (let i = 1; i < rest.length; i++) {
    const restCopy = deepClone(rest)
    console.log("restCopy",restCopy)

    const toCalcNum = restCopy.splice(i,1)
    for (let j = 0; j < operate.length; j++) {
      const toEval = (res + operate[j]+toCalcNum).toString()
      const jisuan = eval(toEval)
      res = calc(jisuan, restCopy);
    }
  }
};
calc(nums[0], nums.slice(1, nums.length));
console.log("flag",flag)



