const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nums = String(n).split('');
  let maxNum = Number(nums[0]);
  for(let i = 0; i < nums.length; i++){
      let num  = [].concat(nums);
      num.splice(i, 1)
      num = Number(num.join(''));
      if(num > maxNum){
          maxNum = num;
      }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
