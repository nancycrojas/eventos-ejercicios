/*contador
Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.*/

const $ = (selector) => document.querySelector(selector); 

let btnresta1= $('#btn-resta-1');
let btnsuma1 = $('#btn-suma-1');
let btnresta5= $('#btn-resta-5');
let btnsuma5 = $('#btn-suma-5');
let btnresta10= $('#btn-resta-10');
let btnsuma10 = $('#btn-suma-10');
let titulo = $('#titulo');

let contador = 0;
const uno = 1;
const cinco = 5;
const diez = 10;

btnresta1.addEventListener('click', () =>{
    contador = contador - uno;
    titulo.innerText = `Contador ${contador}`;
})

btnsuma1.addEventListener('click', () =>{
    contador = contador + uno;
    titulo.innerText = `Contador ${contador}`;;
})

btnresta5.addEventListener('click', () =>{
    contador = contador - cinco;
    titulo.innerText = `Contador ${contador}`;
})

btnsuma5.addEventListener('click', () =>{
    contador = contador + cinco;
    titulo.innerText = `Contador ${contador}`;
})

btnresta10.addEventListener('click', () =>{
    contador = contador - diez;
    titulo.innerText = `Contador ${contador}`;
})

btnsuma10.addEventListener('click', () =>{
    contador = contador + diez;
    titulo.innerText = `Contador ${contador}`;
})