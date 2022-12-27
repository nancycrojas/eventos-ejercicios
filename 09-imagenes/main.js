// imagenes
// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

let $ = (selector)=>document.querySelector(selector);

const imgUno = $("#img-uno");
const imgDos = $("#img-dos");
const imgTres = $("#img-tres");
const imgCuatro = $("#img-cuatro");
const container = $("#container");

const imgGde = $("#img-gde");


imgUno.addEventListener("click", (event)=>{
    console.log(event.target.src);
    container.innerHTML = '<img src="./assets/perrito-1.jpg">'   
})
imgDos.addEventListener("click", (event)=>{
    console.log(event.target.src);
    container.innerHTML = '<img src="./assets/perrito-2.jpg">'   
})
imgTres.addEventListener("click", (event)=>{
    console.log(event.target.src);
    container.innerHTML = '<img src="./assets/perrito-3.jpeg">'   
})
imgCuatro.addEventListener("click", (event)=>{
    console.log(event.target.src);
    container.innerHTML = '<img src="./assets/perrito-4.jpeg">'   
})