const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btncosta = document.querySelector('.costa');
const btnsierra = document.querySelector('.sierra');
const btnselva = document.querySelector('.selva');
const btnPostres = document.querySelector('.postres');
const btnespecial = document.querySelector('.especial');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const costa = platillosArreglo.filter(costa=> costa.getAttribute('data-platillo') === 'costa');
    const sierra = platillosArreglo.filter(sierra => sierra.getAttribute('data-platillo') === 'sierra');
    const selvas = platillosArreglo.filter(selva => selva.getAttribute('data-platillo') === 'selva');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');
    const especial = platillosArreglo.filter(especial=> especial.getAttribute('data-platillo') === 'especial');

    mostrarPlatillos(costa, sierra, selvas, postres, especial, platillosArreglo);

}

const mostrarPlatillos = (costa, sierra, selvas, postres, especial, todos) =>{
    btncosta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        costa.forEach(costa=> contenedorPlatillos.appendChild(costa));
    });

    btnsierra.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         sierra.forEach(sierra=> contenedorPlatillos.appendChild(sierra));
    });

    btnselva.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        selvas.forEach(selva=> contenedorPlatillos.appendChild(selva));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnespecial.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        especial.forEach(especial=> contenedorPlatillos.appendChild(especial));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}