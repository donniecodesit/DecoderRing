const caesarModule = (function () {
  function caesar(input, shift, encode = true) { //Text, Shift Count, Encode/Decode
    //Check that all arguments are the correct type, and that shift is within the proper ranges
    if(typeof input !== 'string' || typeof shift !== 'number' || typeof encode !== 'boolean') return false;
    if(shift === 0 || shift > 25 || shift < -25) return false;

    //Initialize result, predict shift direction off of encode/decode.
    let result = "";
    let shiftModifier = shift;
    let text = input.toLowerCase();
    encode ? shiftModifier = shift : shiftModifier = 0 - shift;

    //Iterate through each letter to compare it's ASCII value, if <97 or >122, it's not a lowercase letter.
    for (let s in text) {
      if (text.charCodeAt(s) < 97 || text.charCodeAt(s) > 122) result += input[s]
      else {
        //If the shift has us printing something outside of the ASCII lowercase, shift by an entire alphabet (26 letters)
        let newChar = text.charCodeAt(s) + shiftModifier;
        if (newChar > 122) result += String.fromCharCode(newChar - 26);
        else if (newChar < 97) result += String.fromCharCode(newChar + 26);
        else result += String.fromCharCode(newChar);
      }
    }
    return result;
  }
  return { 
    caesar, 
  };
})();

module.exports = { caesar: caesarModule.caesar };