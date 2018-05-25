














window.cipher = {
  // ... creando objeto- y función
  encode:(text,offset) =>{
    let array=text.split("");
    let textcod= '';
    let newnumberAscii;
    for(i=0;i<text.length;i++){
    let  numberAscii=array[i].charCodeAt(0); // asigno una variable donde obtenga una caja 
    //que se almacene un texto y extraiga la posición ascii de cada letra que me da el arreglo(conjunto de espacios)
    if(numberAscii>=65 && 122>=numberAscii){      
    newnumberAscii= (numberAscii-65+offset)%26 +65;
    let letterAscii=String.fromCharCode(newnumberAscii);
    textcod= textcod.concat(letterAscii);
    }
return document.getElementById('result').innerHTML=textcod;
}
}
}
// // creando función y colocand fórmula para cifrar texto
  // // fórmula 