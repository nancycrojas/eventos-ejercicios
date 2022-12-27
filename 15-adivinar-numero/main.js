// adivinar-numero
// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)

const $ = (selector)=> document.querySelector(selector);

const mensaje =  $('#mensaje');
const reiniciar = $('#reiniciar');
const body =  $('#body');

const numeroAleatorio = () => (Math.random() * 9).toFixed(0);
let numeroRandow = numeroAleatorio();

body.addEventListener('keypress', (event)=>{
const valorIngresado = event.key.valueOf();
 
if(valorIngresado>= 0 && valorIngresado<=9 ){
    if(valorIngresado < numeroRandow){
        mensaje.innerHTML = `El número es más grande. Número ingresado: ${valorIngresado};`
    } else if (valorIngresado > numeroRandow){
        mensaje.innerHTML = `El número es más chico. Número ingresado: ${valorIngresado}`;
    } else{
        mensaje.innerHTML = `Adivinaste. Número ingresado: ${valorIngresado}`
    };
} else{
    alert('¡Presiona solo números!');
}
});


reiniciar.addEventListener('click', ()=>{
    numeroRandow = numeroAleatorio();
    mensaje.innerHTML = `¡Nueva partida! Presione un número.`;
});