import { arriendos } from "./alquiler.js"
import { ventas } from "./venta.js"

//Función para renderizar las propiedades en base a alquiler o venta, con su respectivo id
const renderizarPropiedades = (propiedades, contenedorId) => {
    const contenedor = document.getElementById(`${contenedorId}`)
    if (!contenedor) return

    for (const propiedad of propiedades) {
        contenedor.innerHTML +=
            `
            <div class="col-md-4 mb-4">
            <div class="card">   
            <img src=${propiedad.src} class="card-img-top" alt="Imagen de la propiedad"/>
            <div class="card-body">
            <h5 class="card-title"> ${propiedad.nombre}</h5>
            <p class="card-text"> ${propiedad.descripcion}</p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
            <p>
                <i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString()}</p>
            <p class= ${propiedad.smoke ? 'text-success' : 'text-danger'}>
                <i class="fa-solid ${propiedad.smoke ? 'fa-smoking' : 'fa-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
            <p class= ${propiedad.pets ? 'text-success' : 'text-danger'}>
                <i class="fa-solid ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Se admiten mascotas' : 'No se admiten mascotas'}
                </p>
            </div>
            </div>
            </div>`
    }

}

//Función para renderizar solo 3 propiedades en Index
const renderizarIndex = (propiedadesIndex, idIndex, limite = 3) => {

    const contenedorIndex = document.getElementById(idIndex)
    if(!contenedorIndex) return;
    
    let contenidoHtml = '';

    for (let i = 0; i < propiedadesIndex.length && i < limite; i++) {
        const prop = propiedadesIndex[i];

        contenidoHtml += `
        <div class="col-md-4 mb-4">
            <div class="card">   
            <img src=${prop.src} class="card-img-top" alt="Imagen de la propiedad"/>
            <div class="card-body">
            <h5 class="card-title"> ${prop.nombre}</h5>
            <p class="card-text"> ${prop.descripcion}</p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p>
                <i class="fas fa-bed"></i> ${prop.habitaciones} |
                <i class="fas fa-bath"></i> ${prop.baños}
                </p>
            <p>
                <i class="fas fa-dollar-sign"></i> ${prop.costo.toLocaleString()}</p>
            <p class= ${prop.smoke ? 'text-success' : 'text-danger'}>
                <i class="fa-solid ${prop.smoke ? 'fa-smoking' : 'fa-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
            <p class= ${prop.pets ? 'text-success' : 'text-danger'}>
                <i class="fa-solid ${prop.pets ? 'fa-paw' : 'fa-ban'}"></i> ${prop.pets ? 'Se admiten mascotas' : 'No se admiten mascotas'}
                </p>
            </div>
            </div>
            </div>
        `;

        
    }

    contenedorIndex.innerHTML = contenidoHtml
}

//Ejecutar la función para propiedades en arriendo y en ventas
renderizarPropiedades(arriendos, 'propiedades-alquiler')
renderizarPropiedades(ventas, 'propiedades-venta')

//Ejecutar función para propiedades en index
renderizarIndex(ventas, 'ventaIndex')
renderizarIndex(arriendos, 'alquilerIndex')

