const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  
  for(let row = 0; row < matrix.length; row++){
    result[row] = matrix[row].slice();
    for(let column = 0; column < matrix[row].length; column++){
      let counter = 0;
      if(matrix[row][column] === true){
        result[row][column] = 1;
      } else {
          if(row - 1 >= 0){
            if((column - 1 >= 0) && matrix[row - 1][column - 1] === true){
              counter++;
            }
            if(matrix[row - 1][column] === true){
              counter++;
            }
            if((column + 1 < matrix[row - 1].length) && matrix[row - 1][column + 1] === true){
              counter++;
            }
          }
          
          if((column - 1 >= 0) && matrix[row][column - 1] === true){
            counter++;
          }
          if((column + 1 < matrix[row].length) && matrix[row][column + 1] === true){
            counter++;
          }
        
          if(row + 1 < matrix.length){
            if((column - 1 >= 0)  && matrix[row + 1][column - 1] === true){
              counter++;
            }
            if(matrix[row + 1][column] === true){
              counter++;
            }
            if((column + 1 < matrix[row + 1].length) && matrix[row + 1][column + 1] === true){
              counter++;
            }
          }
          console.log(counter);
          result[row][column] = counter;
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
