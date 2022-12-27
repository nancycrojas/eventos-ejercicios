// peliculas
// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

const $ = (selector)=>document.querySelector(selector);

let btnCienciaFiccion = $("#ciencia-ficcion");
let btnComedia = $("#comedia");
let btnAventura = $("#aventura");
let btnTodas = $("#todas");
let contCienciaFiccion = $(".cont-ciencia-ficcion");
let contComedia = $(".cont-comedia");
let contAventura = $(".cont-aventura");

btnCienciaFiccion.addEventListener('click', ()=>{
    contCienciaFiccion.classList.remove('hidden');
    contComedia.classList.add('hidden');
    contAventura.classList.add('hidden');
});
btnComedia.addEventListener('click', ()=>{
    contComedia.classList.remove('hidden');
    contCienciaFiccion.classList.add('hidden');
    contAventura.classList.add('hidden');
});
btnAventura.addEventListener('click', ()=>{
    contAventura.classList.remove('hidden');
    contCienciaFiccion.classList.add('hidden');
    contComedia.classList.add('hidden');
});
btnTodas.addEventListener('click', ()=>{
    contCienciaFiccion.classList.remove('hidden');
    contComedia.classList.remove('hidden');
    contAventura.classList.remove('hidden');
});
