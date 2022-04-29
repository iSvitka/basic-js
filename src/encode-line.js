const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const charsCounter = {};
  let chars = str.split('');
  let result = '';

  for(let i = 0; i < chars.length; i++){
    if(chars[i] !== chars[i + 1] && i + 1 < chars.length){
      if(!charsCounter[chars[i]]){
        result += chars[i]
      } else {
        charsCounter[chars[i]]++;
      }
      continue;
    }

    if(!charsCounter[chars[i]]){
      charsCounter[chars[i]] = 1;
    } else {
      charsCounter[chars[i]]++;
    }
  }
  
  for(let key in charsCounter){
    if(charsCounter[key] <= 1){
      result = `${result}${key}`
    } else {
      result = `${result}${charsCounter[key]}${key}`
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
