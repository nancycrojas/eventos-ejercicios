//adivinanza
/*
Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
*/

const $ = (selector)=>document.querySelector(selector);

const resp1 = $('#respuesta-1');
const resp2 = $('#respuesta-2');
const resp3 = $('#respuesta-3');
const sol = $('.solucion')

resp1.addEventListener('click',()=>{
    resp1.classList.add('rojo');
    resp3.classList.add('rojo');
    resp2.classList.add('verde');
    sol.innerText=`¡Le erraste!`
})

resp2.addEventListener('click',()=>{
    resp2.classList.add('verde');
    sol.innerText=`¡Correcto!`
    sol.classList.add('solucion')
})

resp3.addEventListener('click',()=>{
    resp1.classList.add('rojo');
    resp3.classList.add('rojo');
    resp2.classList.add('verde');
    sol.innerText=`¡Le erraste!`
})



