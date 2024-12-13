import { arriendos } from "./alquiler.js"
import { ventas } from "./venta.js"

//RENDERIZACIÓN DE PROPIEDADES EN ALQUILER PROPIEDADES_ALQUILER.HTML
let arriendoArticle = document.querySelector('#propiedades-alquiler')

for (const arriendo of arriendos) {
    arriendoArticle.innerHTML +=
        `
        <div class="col-md-4 mb-4">
        <div class="card">   
        <img src=${arriendo.src} class="card-img-top" alt="Imagen de la propiedad"/>
        <div class="card-body">
        <h5 class="card-title"> ${arriendo.nombre}</h5>
        <p class="card-text"> ${arriendo.descripcion}</p>
        <p>
            <i class="fas fa-map-marker-alt"></i> ${arriendo.ubicacion}</p>
        <p>
            <i class="fas fa-bed"></i> ${arriendo.habitaciones} |
            <i class="fas fa-bath"></i> ${arriendo.baños}
            </p>
        <p>
            <i class="fas fa-dollar-sign"></i> ${arriendo.costo.toLocaleString()}</p>
        <p class= ${arriendo.smoke ? 'text-success' : 'text-danger'}>
            <i class="fa-solid ${arriendo.smoke ? 'fa-smoking' : 'fa-ban' }"></i> ${arriendo.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
        <p class= ${arriendo.pets ? 'text-success' : 'text-danger'}>
            <i class="fa-solid ${arriendo.pets ? 'fa-paw' : 'fa-ban'}"></i> ${arriendo.pets ? 'Se admiten mascotas' : 'No se admiten mascotas'}
            </p>
   
        </div>
        </div>`
}

//RENDERIZACIÓN DE PROPIEDAES ALQUILER EN INDEX.HTML
