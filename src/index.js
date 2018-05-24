// Se asignan variables para la implementación del código cesar

let text=prompt("ingresa tu mensaje aquí");
let offset= parseInt(prompt("Ingresa el offset que desees")) ;
let result="";
let formula= '';
// creando función y colocand fórmula para cifrar texto
// fórmula: (x-65+n)%26 +65
let messagenew=(text,offset) => {
formula=(text.charCodeAt(0)-65+offset) %26 +65;
result=String.fromCharCode(formula);
return= result;
}
alert(messagenew())