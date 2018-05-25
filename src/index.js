// Se asignan variables para la implementación del código cesar

let text="ingresa tu mensaje aquí";
let offset= parseInt("Ingresa el offset que desees") ;
let result, formula;
// creando función y colocand fórmula para cifrar texto
// fórmula: (x-65+n)%26 +65
let messagenew=(text,offset) => {
	formula=(text.charCodeAt(0)-65+offset) %26 +65;
	result=String.fromCharCode(formula);
	return result;
}
alert(messagenew())