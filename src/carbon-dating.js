const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let type = typeof sampleActivity;
  if(isNaN(Number(sampleActivity)) || type !== 'string'){
    return false;
  }

  let num = Number(sampleActivity);

  if(0 < num && num <= 15){
    return Math.ceil( Math.log(MODERN_ACTIVITY / num) / (LOG_2 / HALF_LIFE_PERIOD) );
  }
  else{
    return false;
  }
}

module.exports = {
  dateSample
};
