window.cipher = {
  // ... creando objeto- y función
  encode: (offset, string) => {
    let numberAscii;
    let newnumberAscii;
    let letterAscii;
    let textcod = '';
    for (i = 0; i < string.length; i++) {
      numberAscii = string.charCodeAt(i); // asigno una variable donde obtenga una caja que se
      // almacene un texto y extraiga la posición ascii de cada letra que me da el arreglo(conjunto de espacios)
      if (numberAscii >= 65 && numberAscii <= 90) {
        newnumberAscii = (numberAscii - 65 + offset) % 26 + 65;
        letterAscii = String.fromCharCode(newnumberAscii);
      } else {
        if (numberAscii >= 97 && numberAscii <= 122) {
          newnumberAscii = (numberAscii - 97 + offset) % 26 + 97;
          letterAscii = String.fromCharCode(newnumberAscii);
        }
        else {
          letterAscii = string.charAt(i);
        }
      }
      textcod = textcod.concat(letterAscii);
    }
    return textcod;
  },
  decode: (offset, string) => {
    let numberAscii;
    let newnumberAscii;
    let letterAscii;
    let textcod = '';
    for (i = 0; i < string.length; i++) {
      numberAscii = string.charCodeAt(i); // asigno una variable donde obtenga una caja que se
      // almacene un texto y extraiga la posición ascii de cada letra que me da el arreglo(conjunto de espacios)
      if (numberAscii >= 65 && numberAscii <= 90) {
        newnumberAscii = (numberAscii + 65 - offset) % 26 + 65;
        letterAscii = String.fromCharCode(newnumberAscii);
      } else {
        if (numberAscii >= 97 && numberAscii <= 122) {
          newnumberAscii = (numberAscii - 122 - offset) % 26 + 122;
          letterAscii = String.fromCharCode(newnumberAscii);
        } else {
          letterAscii = string.charAt(i);
        }
      }
      textcod = textcod.concat(letterAscii);
    }
    return textcod;
  }
};