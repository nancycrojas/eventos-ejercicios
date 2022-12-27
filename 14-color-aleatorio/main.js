// color-aleatorio
// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).

const $ = (selector)=> document.querySelector(selector);
const body = $('#body');

const generarNumero = () => (Math.random() * 255).toFixed(0);

body.addEventListener('keypress', (event)=>{
    event.preventDefault();

    if(event.code == "Space"){
        body.style.backgroundColor = `rgb(${generarNumero()}, ${generarNumero()}, ${generarNumero()})`;
    }
})