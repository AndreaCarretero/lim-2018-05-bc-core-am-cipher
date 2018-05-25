// Se asignan variables para la implementación del código cesar
let clickCifred=()=>
{//El usuario ingresa su  mensaje aquí
    let texttext=document.getElementById('message').value;
    //Varible para colocar el número que se desea desplazar a la derecha(cifrado) o izquierda
    //o (descrifrado)
   let offsetreal=document.getElementById('offs').value
    parseInt(offsetreal);
    let numOffset= parseInt(offsetreal);
    cipher.encode(texttext,offsetreal);
}

 document.getElementById('ci').addEventListener('click',clickCifred);
 

