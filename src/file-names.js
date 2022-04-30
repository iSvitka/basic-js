const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for(let i = 0; i < names.length; i++){
    let uniq = names.indexOf(names[i]);
    if(uniq !== i){
      let checkSuffix = true;
      let suffix = 1;
      while(checkSuffix){
        let newFileName = `${names[i]}(${suffix})`;
        if(names.indexOf(newFileName) > i ||names.indexOf(newFileName) === -1){
          names[i] = newFileName;
          checkSuffix = false;
        } else {
          suffix++;
        }
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
