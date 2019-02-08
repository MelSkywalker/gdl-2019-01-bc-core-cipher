window.cipher = {

  offset: 0,
  phrase: '',

//método para codificar
  encode: function(offset, phrase) {
    let encodedString = '';
    let y;
    for(let i = 0 ; i < phrase.length ; i++) {
      let x = phrase.charCodeAt(i);
      if(x>=65 && x<=90){
        y = (x - 65 + offset) % 26 + 65;

      } else if (x>=97 && x<=122){
        y = (x - 97 + offset) % 26 + 97;

      } else{
        y = phrase.charCodeAt(i);
      }
      encodedString += (String.fromCharCode(y));
    }
    return encodedString;
  },

//método para decodificar
  decode: function(offset, phrase) {
    let decodedString = '';
    let y;
    for(let i = 0 ; i < phrase.length ; i++) {
        
      let x = phrase.charCodeAt(i);

      if (x >= 65 && x <= 90){
        y = (x + 65 - offset) % 26 + 65;

      } else if (x >= 97 && x <= 122){
        y = (x+85-offset) %26 +97;
          
      } else{
        y = phrase.charCodeAt(i);
      }
      decodedString += (String.fromCharCode(y));
    }
    return decodedString;
    }
  };