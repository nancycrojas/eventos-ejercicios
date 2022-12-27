//paleta
/*
Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.*/

const $ = (selector) =>document.querySelector(selector);

const divUno = $('.div-1');
const divDos = $('.div-2');
const divTres = $('.div-3');
const divCuatro = $('.div-4');
const divCinco = $('.div-5');
const divSeis = $('.div-6');
const fondo = $('.container');


divUno.addEventListener('click',(event)=>{
    console.log(event);
    fondo.style.backgroundColor = "#fe4365";
})
divDos.addEventListener('click',(event)=>{
    fondo.style.backgroundColor = "#fc9d9a";
})
divTres.addEventListener('click',(event)=>{
    fondo.style.backgroundColor = "#f9cdad";
})
divCuatro.addEventListener('click',(event)=>{
    fondo.style.backgroundColor = "#0db2ac";
})
divCinco.addEventListener('click',(event)=>{
    fondo.style.backgroundColor = "#f5dd7e";
})
divSeis.addEventListener('click',(event)=>{
    fondo.style.backgroundColor = "#fc8d4d";
})
