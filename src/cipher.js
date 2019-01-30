window.cipher = {

  offset: 0,
  phrase: '',

//método para codificar
  encode: function(offset, phrase) {
    let array = phrase.split('');
    let encodedString = '';
    for(let i = 0 ; i < phrase.length ; i++) {
      if(array[i] === ' '){ //Si hay un espacio, dejarlo igual
        encodedString += ' ';
        
      } else{
        let x = (phrase.charCodeAt(i) - 65 + offset) % 26 + 65;
        encodedString += (String.fromCharCode(x));
      }
    }    
    return encodedString;
  },

//método para decodificar
  decode: function(offset, string) {
    let array = string.split('');
    let decodedString = '';
    for(let i = 0 ; i < string.length ; i++) {
      if(array[i] === ' '){
        decodedString += ' ';
      } else{
        let x = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
        decodedString += (String.fromCharCode(x));
      }
    }
    return decodedString;
  }
};