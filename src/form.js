//Ir a la la credencial CODIFICADA ya creada
const encodedCard = () => {
    // Llamar a todas las funciones que codifican cada campo
    encodeUsername();
    encodeNationality();
    encodeEmergencyName();
    encodeEmergencyFacebook();
    encodeAllergies();
    encodeNotes();
  };
  
  //Ir a la credencial DECODIFICADA ya creada
  const decodedCard = () => {
    //Llamar a todas las funciones que decodifican cada campo
    decodeUsername();
    decodeNationality();
    decodeEmergencyName();
    decodeEmergencyFacebook();
    decodeAllergies();
    decodeNotes();
  };
  
    //Obtener offset
  const getOffset = () => {
    let offset = parseInt(document.getElementById('offset').value);
    return offset;
  };
    
    //Guardar el valor escrito por el usuario y pasarlo a letras mayúsculas
  const getString = (userInfo) => {
    let phrase = (document.getElementById(userInfo).value).toUpperCase();
    
    return phrase;
  };
  
  //Cifrar:
  const encodeUsername = () => {
    document.getElementById('resultUsername').innerHTML = cipher.encode(getOffset(),getString('username'));
  };
  
  const encodeNationality = () => {
    document.getElementById('resultNationality').innerHTML = cipher.encode(getOffset(),getString('nationality'));
  };
  
  const encodeEmergencyName = () => {
    document.getElementById('resultEmergencyName').innerHTML = cipher.encode(getOffset(),getString('emergencyName'));
  };
  
  const encodeEmergencyFacebook = () => {
    document.getElementById('resultEmergencyFacebook').innerHTML = cipher.encode(getOffset(),getString('emergencyFacebook'));
  };
  
  const encodeAllergies = () => {
    document.getElementById('resultAllergies').innerHTML = cipher.encode(getOffset(),getString('allergies'));
  };
  
  const encodeNotes = () => {
    document.getElementById('resultNotes').innerHTML = cipher.encode(getOffset(),getString('notes'));
  };
  
  // Descifrar:
  const decodeUsername = () => {
    document.getElementById('resultUsername').innerHTML = cipher.decode(getOffset(),getString('username'));
  };
  
  const decodeNationality = () => {
    document.getElementById('resultNationality').innerHTML = cipher.decode(getOffset(),getString('nationality'));
  };
  
  const decodeEmergencyName = () => {
    document.getElementById('resultEmergencyName').innerHTML = cipher.decode(getOffset(),getString('emergencyName'));
  };
  
  const decodeEmergencyFacebook = () => {
    document.getElementById('resultEmergencyFacebook').innerHTML = cipher.decode(getOffset(),getString('emergencyFacebook'));
  };
  
  const decodeAllergies = () => {
    document.getElementById('resultAllergies').innerHTML = cipher.decode(getOffset(),getString('allergies'));
  };
  
  const decodeNotes = () => {
    document.getElementById('resultNotes').innerHTML = cipher.decode(getOffset(),getString('notes'));
  };
  
  //Event Listeners
  document.getElementById('toEncode').addEventListener('click',encodedCard,false);
  document.getElementById('toDecode').addEventListener('click',decodedCard,false);