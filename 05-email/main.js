//email (sin leer)
// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

const $ = (selector) =>document.querySelector(selector);

const emailUno = $(".email-1");
const emailDos = $(".email-2");
const emailTres = $(".email-3");
const emailCuatro = $(".email-4");
const emailCinco = $(".email-5");
const emailSeis = $(".email-6");
const emailSiete = $(".email-7");
const emailOcho = $(".email-8");
const emailNueve = $(".email-9");
const emailDiez = $(".email-10");
const parrUno = $(".parr-1");
const parrDos = $(".parr-2");
const parrTres = $(".parr-3");
const parrCuatro = $(".parr-4");
const parrCinco = $(".parr-5");
const parrSeis = $(".parr-6");
const parrSiete = $(".parr-7");
const parrOcho = $(".parr-8");
const parrNueve = $(".parr-9");
const parrDiez = $(".parr-10");

emailUno.addEventListener('click',(event)=>{
    console.log(event);
    parrUno.style.fontWeight = ("200");
    parrUno.style.color = ("gray")
})
emailDos.addEventListener('click',(event)=>{
    parrDos.style.fontWeight = ("200");
    parrDos.style.color = ("gray")
})
emailTres.addEventListener('click',(event)=>{
    parrTres.style.fontWeight = ("200");
    parrTres.style.color = ("gray")
})
emailCuatro.addEventListener('click',(event)=>{
    parrCuatro.style.fontWeight = ("200");
    parrCuatro.style.color = ("gray")
})
emailCinco.addEventListener('click',(event)=>{
    parrCinco.style.fontWeight = ("200");
    parrCinco.style.color = ("gray")
})
emailSeis.addEventListener('click',(event)=>{
    parrSeis.style.fontWeight = ("200");
    parrSeis.style.color = ("gray")
})
emailSiete.addEventListener('click',(event)=>{
    parrSiete.style.fontWeight = ("200");
    parrSiete.style.color = ("gray")
})
emailOcho.addEventListener('click',(event)=>{
    parrOcho.style.fontWeight = ("200");
    parrOcho.style.color = ("gray")
})
emailNueve.addEventListener('click',(event)=>{
    parrNueve.style.fontWeight = ("200");
    parrNueve.style.color = ("gray")
})
emailDiez.addEventListener('click',(event)=>{
    parrDiez.style.fontWeight = ("200");
    parrDiez.style.color = ("gray")
})