window.cipher = {
/*
  offset: 0,
  string: '',

  //método para obtener offset
  const getOffset = () => {
    offset = document.getElementsByName('offset').value; //'offset' u offset ???
    return offset;
  }
  
  //método para guardar el valor escrito por el usuario y pasarlo a letras mayúsculas
  const getString = (userInfo) => {
    string = (document.getElementsById('userInfo').value).toUpperCase(); // 'userInfo' o userInfo ???
    return string;
  }
  */

//método para codificar
  let encode = (offset, string) => {
    let encodedString = '';
    for(let i = 0 ; i < string.length ; i++) {
      if(string === ' '){ //Si hay un espacio, dejarlo igual
        encodedString += ' ';
      } else{
        let x = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
        encodedString += (String.fromCharCode(x));
      }
    }
    return encodedString;
  }

//método para decodificar
  let decode = (offset, string) => {
    let decodedString = '';
    for(let i = 0 ; i < string.length ; i++) {
      if(string === ' '){
        decodedString += ' ';
      } else{
        let x = (string.charCodeAt(i) - 65 - offset) % 26 + 65;
        decodedString += (String.fromCharCode(x));
      }
    }
    return decodedString;
  }
//};
