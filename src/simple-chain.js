const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  partsOfChain: [],

  getLength() {
    return this.partsOfChain.length;
  },
  addLink(value) {
    this.partsOfChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position < 1 || position > this.getLength()){
      this.partsOfChain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.partsOfChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.partsOfChain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.partsOfChain.join('~~');
    this.partsOfChain = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
