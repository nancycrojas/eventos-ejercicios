// scroll
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

let body = document.body; 

document.addEventListener('scroll',()=>{
    if(scrollY <=500){
        body.style.backgroundColor = 'red'
    }else if(scrollY > 501 && scrollY <=1000){
        body.style.backgroundColor = 'green'
    }else if(scrollY > 1001 && scrollY <=1500){
        body.style.backgroundColor = 'blue'
    }else{
        body.style.backgroundColor = 'orange'
    }
})

