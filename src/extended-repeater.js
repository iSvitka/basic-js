const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  if(str){
    str = String(str);
  }
  if(options.addition){
    options.addition = String(options.addition);
  }

  if(options.repeatTimes){

    for(let i = 1; i <= options.repeatTimes; i++){
      result = `${result}${str}`

      if(options.additionRepeatTimes){

        for(let j = 1; j <= options.additionRepeatTimes; j++){
          result = `${result}${options.addition}`

          if(j < options.additionRepeatTimes){
            if(options.additionSeparator){
              result = `${result}${options.additionSeparator}`
            } else {
              result = `${result}|`
            }
          } 
        } 

      } else if(options.addition){
        result = `${result}${options.addition}`
      }

      if(i < options.repeatTimes){
        if(options.separator){
          result = `${result}${options.separator}`
        } else {
          result = `${result}+`
        }

      }

    }

  } else {
    result = `${result}${str}${options.addition}`
  }

  return result;
}

module.exports = {
  repeater
};
