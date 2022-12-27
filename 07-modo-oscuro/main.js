// modo-oscuro
// Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

let $ = (selector) => document.querySelector(selector);


const body = $("#body");
const btn = $("#btn");
const titulo = $("#titulo");
const parrafo = $("#parrafo");

btn.addEventListener("click" , (event)=>{
    console.log(event);
    body.classList.toggle('oscuro');
    titulo.classList.toggle('oscuro');
    parrafo.classList.toggle('oscuro');
    if(body.classList.contains('oscuro')){
        btn.innerHTML = 'Modo Claro ☀'
    }
    else{
        btn.innerHTML = 'Modo Oscuro 🌚'
    }
    
});





