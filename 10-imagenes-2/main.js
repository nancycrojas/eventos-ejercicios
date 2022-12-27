// imagenes-2
// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

let $ = (selector)=>document.querySelector(selector);

const imgUno = $("#img-uno");
const imgDos = $("#img-dos");
const imgTres = $("#img-tres");
const imgCuatro = $("#img-cuatro");
const container = $("#container");

const imgGde = $("#img-gde");


imgUno.addEventListener("mouseenter", ()=>{
    container.innerHTML = '<img src="./assets/perrito-1.jpg">'   
})
imgDos.addEventListener("mouseenter", ()=>{
    container.innerHTML = '<img src="./assets/perrito-2.jpg">'   
})
imgTres.addEventListener("mouseenter", ()=>{
    container.innerHTML = '<img src="./assets/perrito-3.jpeg">'   
})
imgCuatro.addEventListener("mouseenter", ()=>{
    container.innerHTML = '<img src="./assets/perrito-4.jpeg">'   
})

