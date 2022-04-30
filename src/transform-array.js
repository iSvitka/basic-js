const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const DSD_NEXT = '--discard-next';
  const DSD_PREV = '--discard-prev';
  const DBL_NEXT = '--double-next';
  const DBL_PREV = '--double-prev';
  
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  let j = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== DSD_NEXT && arr[i] !== DSD_PREV && arr[i] !== DBL_NEXT && arr[i] !== DBL_PREV){
      result[j] = arr[i];
      j++;
    } else {
      if(i + 1 < arr.length){
        if(arr[i] === DSD_NEXT){
          i++;
        }
        if(arr[i] === DBL_NEXT){
          result[j] = arr[i + 1];
          j++;
          result[j] = arr[i + 1];
          i++;
          j++;
        }
      } 

      if(i - 1 >= 0){
        if(arr[i] === DSD_PREV && arr[i - 2] !== DSD_NEXT){
          result.splice(j - 1, 1);
          j--;
        }
        if(arr[i] === DBL_PREV && arr[i - 2] !== DSD_NEXT){
          result[j] = arr[i - 1];
          j++;
        }
      }
    }
  }
  
  
  return result;
}

module.exports = {
  transform
};
