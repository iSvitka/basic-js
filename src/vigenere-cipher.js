const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if(!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase().split('').map(char => {
      if(char.toUpperCase() !== char.toLowerCase()){
        return char = char.charCodeAt(0) - 65;
      }
      return char;
    });
    key = key.toUpperCase().split('').map(char => {
      if(char.toUpperCase() !== char.toLowerCase()){
        return char = char.charCodeAt(0) - 65;
      }
      return char;
    });

    let encryptedMessage  = [];
    let currentChar = 0;

    for(let i = 0; i < message.length; i++){
      if(typeof(message[i]) === 'number'){
        encryptedMessage.push(String.fromCharCode((message[i] + key[currentChar % key.length]) % 26 + 65));
        currentChar++;
      } else {
        encryptedMessage.push(message[i]);
      }
    }

    return this.direction ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }
  
  decrypt(message, key) {
    if(!(message && key)){
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase().split('').map(char => {
      if(char.toUpperCase() !== char.toLowerCase()){
        return char = char.charCodeAt(0) - 65;
      }
      return char;
    });
    key = key.toUpperCase().split('').map(char => {
      if(char.toUpperCase() !== char.toLowerCase()){
        return char = char.charCodeAt(0) - 65;
      }
      return char;
    });

    let decryptedMessage  = [];
    let currentChar = 0;

    for(let i = 0; i < message.length; i++){
      if(typeof(message[i]) === 'number'){
        decryptedMessage.push(String.fromCharCode((message[i] - key[currentChar % key.length] + 26) % 26 + 65));
        currentChar++;
      } else {
        decryptedMessage.push(message[i]);
      }
    }

    return this.direction ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
