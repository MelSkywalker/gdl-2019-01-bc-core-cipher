//Ir a la la credencial CODIFICADA ya creada
const encodedCard = () => {
    // Llamar a todas las funciones que codifican cada campo
    encodeUsername();
    encodeNationality();
    encodeEmergencyName();
    encodeAllergies();
    encodeNotes();
    showCard();
    showOffset();
  };
  
  //Ir a la credencial DECODIFICADA ya creada
  const decodedCard = () => { 
    //Llamar a todas las funciones que decodifican cada campo
    decodeUsername();
    decodeNationality();
    decodeEmergencyName();
    decodeAllergies();
    decodeNotes();
    showCard();
    showOffset();
    event.preventDefault();
  };
  
    //Obtener offset
  const getOffset = () => {
    let offset = parseInt(document.getElementById('offset').value);
    return offset;
  };

  //Mostrar Offset
  const showOffset = () => {
    document.getElementById('resultOffset').innerHTML = getOffset();
  };
    
    //Guardar el valor escrito por el usuario
  const getString = (userInfo) => {
    let phrase = document.getElementById(userInfo).value;
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
    
  const decodeAllergies = () => {
    document.getElementById('resultAllergies').innerHTML = cipher.decode(getOffset(),getString('allergies'));
  };
  
  const decodeNotes = () => {
    document.getElementById('resultNotes').innerHTML = cipher.decode(getOffset(),getString('notes'));
  };
  
  //Nueva credencial
  //Borrar campos
  const clearCard = () => {
    document.getElementById('offset').value = "";
    document.getElementById('username').value = "";
    document.getElementById('nationality').value = "";
    document.getElementById('emergencyName').value = "";
    document.getElementById('allergies').value = "";
    document.getElementById('notes').value = "";
  };

  const clearAll = () => {
    clearCard();
    hideCard();
    document.getElementById('resultUsername').innerHTML = "";
    document.getElementById('resultNationality').innerHTML = "";
    document.getElementById('resultEmergencyName').innerHTML = "";
    document.getElementById('resultAllergies').innerHTML = "";
    document.getElementById('resultNotes').innerHTML = "";
  };

  //Esconder y mostrar credencial
  const showCard = () => {
    document.getElementById('cardForm').style.display = 'none';
    document.getElementById('cardDone').style.display = 'block';
  };

  const hideCard = () => {
    document.getElementById('cardForm').style.display = 'block';
    document.getElementById('cardDone').style.display = 'none';
  };


  //Event Listeners
  document.getElementById('clearCard').addEventListener('click',clearCard,false);
  document.getElementById('toEncode').addEventListener('click',encodedCard,false);
  document.getElementById('toDecode').addEventListener('click',decodedCard,false);
  document.getElementById('newCardButton').addEventListener('click',clearAll,false);
