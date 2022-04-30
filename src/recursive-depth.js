const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    let counter = 1;
    let max = 0;
    for(let i = 0; i <= arr.length - 1; i++){
      if(Array.isArray(arr[i])){
        max = Math.max(this.calculateDepth(arr.flat()), max);
        break;
      }
    }
    return counter + max;
  }
}

module.exports = {
  DepthCalculator
};
