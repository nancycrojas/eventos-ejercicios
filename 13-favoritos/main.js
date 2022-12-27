//  favoritos
// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

const $ = (selector)=> document.querySelector(selector);

let contenedorImagenes = $('#imagenes');
let contenedorFavoritos = $('#favoritos');

contenedorImagenes.addEventListener("click",(event)=>{
  let elemento = event.target;
  if(elemento.classList.contains('img')){
    contenedorFavoritos.innerHTML += `<img src=${elemento.src} alt="" class="img" id=${elemento.id}>`;
    elemento.remove();
  }
})

contenedorFavoritos.addEventListener("click",(event)=>{
  let elemento = event.target;

  if(elemento.classList.contains("img")){
    contenedorImagenes.innerHTML += `<img src=${elemento.src} alt="" class="img" id=${elemento.id}>`;
    elemento.remove();
  }
})

