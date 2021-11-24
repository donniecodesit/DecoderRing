const substitutionModule = (function () {
  const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function substitution(input, alphabet, encode = true) {
    result = "";
    //Check out susbtituted alphabet, if it is too short (not 26) or missing, return false. Also check types!
    if (!alphabet || alphabet.length !== 26) return false;
    if(typeof input !== 'string' || typeof alphabet !== 'string' || typeof encode !== 'boolean') return false;

    //Check if the alphabet contains special characters (no duplicates!)
    // v This will split the string into an array, sort them by order, join them, and check if any index matches it's +1 index
    const duplicateChecks = alphabet.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if (duplicateChecks !== null) return false;


    //If Encode, text ==> .oa.
    if (encode){
      //Check each letter of our input, if there is a space, include it, otherwise convert each letter using alphabetKey ==> alphabet
      for (let index of input) {
        index === " " ? result += " " : result += alphabet[normalAlphabet.indexOf(index.toLowerCase())];
      }
    } 

    //If Decode, .oa. ==> text
    else {
      //Check each letter of our input, if there is a space, include it, otherwise convert each letter using alphabet ==> alphabetKey
      for (let index of input) {
        index === " " ? result += " " : result += normalAlphabet[alphabet.indexOf(index.toLowerCase())];
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
