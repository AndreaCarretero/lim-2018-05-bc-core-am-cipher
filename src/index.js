// Asignaré variables 
// Se asignan variables para la implementación del código cesar

let numberOffset; // Declaro variable para almancenar offset tipo número
let clickCifred = () => {//El usuario ingresa su  mensaje aquí
    let texttext = document.getElementById('message').value;
    //Varible para colocar el número que se desea desplazar a la derecha(cifrado) o izquierda
    //o (descrifrado)
    let offsetreal = document.getElementById('offset').value;
    numberOffset= parseInt(offsetreal);
    let texresult = cipher.encode(numberOffset, texttext);
    document.getElementById('result').innerHTML = texresult;
}
document.getElementById('ci').addEventListener('click', clickCifred);

let clickDecifred = () => {//El usuario ingresa su  mensaje aquí
    let texttext = document.getElementById('message').value;
    //Varible para colocar el número que se desea desplazar a la derecha(cifrado) o izquierda
    //o (descrifrado)
    let offsetreal = document.getElementById('offset').value;
    numberOffset= parseInt(offsetreal);
    let texresult = cipher.decode(numberOffset, texttext);
    document.getElementById('result').innerHTML = texresult;   
}
document.getElementById('deci').addEventListener('click', clickDecifred);