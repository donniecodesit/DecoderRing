const polybiusModule = (function () {
  //Initialize a key with the table values for each letter
  const cypherKey = {a:11,b:21,c:31,d:41,e:51,f:12,g:22,h:32,i:42,j:42,k:52,l:13,m:23,n:33,o:43,p:53,q:14,r:24,s:34,t:44,u:54,v:15,w:25,x:35,y:45,z:55};

  function polybius(input, encode = true) { //Text, Encode/Decode
    if(typeof input !== 'string' || typeof encode !== 'boolean') return false;
    //Initialize a text output, result, and the key value pair links
    let text;
    let result = "";
    const cyKeys = Object.keys(cypherKey);
    const cyVals = Object.values(cypherKey);

    //If encoding, letters -> numbers
    if (encode) {
      text = input.toLowerCase();
      for (let s of text) {
        //Append the letters values from the key and include spaces
        s !== " " ? result += cypherKey[s] : result += " ";
      }
    //Else, numbers -> letters
    } else { 
      //Join our text and make sure there is an even number count
      if (input.split(" ").join("").length % 2 !== 0) return false;
      //Go through input and convert each letter to a table cross, then append values, include spaces.
      for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") result += " ";
        else {
          const cross = input[i] + input[i+1];
          if (cross === "42") {
            result += "(i/j)";
          } else {
            const num = parseInt(cross)
            result += cyKeys[cyVals.indexOf(num)];
          }
          i++;
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
