const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let s1chars = s1.split('');
  let s2chars = s2.split('');
  for(let i = 0; i < s1chars.length; i++){
    for(let j = 0; j < s2chars.length; j++){
        if(s1chars[i] === s2chars[j]){
          counter++;
          s1chars.splice(i, 1);
          i--;
          s2chars.splice(j, 1);
          break;
        }
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
