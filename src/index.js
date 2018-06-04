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

let clickDecifred = () => {//Asignando variable para click descrifrar
    let texttext = document.getElementById('message').value;
    //Varible para colocar el número que se desea desplazar a la derecha(cifrado) o izquierda
    //o (descrifrado)
    let offsetreal = document.getElementById('offset').value;
    numberOffset= parseInt(offsetreal);
    let texresult = cipher.decode(numberOffset, texttext);
    document.getElementById('result').innerHTML = texresult;   
}
document.getElementById('deci').addEventListener('click', clickDecifred);



let clickstep1 =() => {
    document.getElementById('step1').style.visibility='visible';
}
document.getElementById('button1').addEventListener('click',clickstep1);

let clickstep2 =() => {
    document.getElementById('step2').style.visibility='visible';
}
document.getElementById('button2').addEventListener('click',clickstep2);

let clickstep3 =() => {
    document.getElementById('step3').style.visibility='visible';
}
document.getElementById('button3').addEventListener('click',clickstep3);

let clickstep4 =() => {
    document.getElementById('step4').style.visibility='visible';
}
document.getElementById('button4').addEventListener('click',clickstep4);