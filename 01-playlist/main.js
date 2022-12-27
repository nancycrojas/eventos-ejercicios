/*playlist
Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada*/

const $ = (selector) => document.querySelector(selector);

const cancionUsuarioUno = prompt("Ingrese una canción");
const cancionUno = $("#cancion-uno");
cancionUno.innerText = cancionUsuarioUno;

const cancionUsuarioDos = prompt("Ingrese otra canción");
const cancionDos = $("#cancion-dos");
cancionDos.innerText = cancionUsuarioDos;

const cancionUsuarioTres = prompt("Ingrese otra canción");
const cancionTres = $("#cancion-tres");
cancionTres.innerText = cancionUsuarioTres;

const cancionUsuarioCuatro = prompt("Ingrese otra canción");
const cancionCuatro = $("#cancion-cuatro");
cancionCuatro.innerText = cancionUsuarioCuatro;

const cancionUsuarioCinco = prompt("Ingrese una última canción");
const cancionCinco = $("#cancion-cinco");
cancionCinco.innerText = cancionUsuarioCinco;

