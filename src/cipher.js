window.cipher = {
  offset: 0,
  string: '',

  //método para obtener offset
  const getOffset = () => {
    offset = document.getElementsByName('offset').value;
  }
  
  //método para guardar el valor escrito por el usuario y pasarlo a letras mayúsculas
  const getInfo = (info) => {
    string = (document.getElementsById(info).value).toUpperCase();
  }

//método para codificar
  let encode: (offset, string) => {
    let encodeString = '';
    for(let i = 0 ; i <= string.length ; i++) {
      if(string === ' '){ //Si hay un espacio, dejarlo igual
        encodeString += ' ';
      } else{
        let x = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
        encodeString += (String.fromCharCode(x));
      }
    }
    return encodeString;
  }

//método para decodificar
  let decode: (offset, string) => {
    let decodeString = '';
    for(let j = 0 ; j <= string.length ; j++) {
      if(string === ' '){
        decodeString += ' ';
      } else{
        let y = (string.charCodeAt(i) - 65 - offset) % 26 + 65;
        decodeString += (String.fromCharCode(y));
      }
    }
    return decodeString;
  }
};
